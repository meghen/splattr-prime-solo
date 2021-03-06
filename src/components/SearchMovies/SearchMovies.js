import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../UserPage/UserPage.css'
// import SearchMoviesChild from '../SearchMoviesChild/SearchMoviesChild';

class SearchMovies extends Component {
    state = {
        searchQuery: '',
        list: 0,
        movie: 0
    }
    closeModal=()=>{
      let modal = document.getElementById("myModal");
      // let span = document.getElementsByClassName("close")[0];
      modal.style.display = "none";
    }
    getInfo=(movie)=>{        
      //routes to movies details page, passing movie's id in as url router
      console.log('what even is this.props.history?SEARCH PAGE ',this.props.history);
      this.props.history.push({
        pathname: `/details/${movie.id}`,
        state: {movie: movie}
      })
    }
    handleChange=(event)=>{
      this.setState({searchQuery: event.target.value})
    }
    saveToList=(movie)=>{
      console.log('movie.movieInfo ',movie.movieInfo);
      
      this.props.dispatch({
        type: 'SAVE_TO_LIST', 
        payload: {
          list: this.state,
          movieInfo: {
            id: movie.id,
            title: movie.title,
            poster_path: movie.poster_path,
            backdrop_path: movie.backdrop_path,
            overview: movie.overview,
            release_date: movie.release_date
          }
        }
      })
      let modal = document.getElementById("myModal");
      modal.style.display = "none";
    }
    searchMovies=()=>{        
      this.props.dispatch({type: 'SEARCH_MOVIES', payload: this.state.searchQuery})        
    }
    selectList=(event)=>{    
      this.setState({list: event.target.value})
    }
    showSelectList=(movie)=>{
      this.setState({movie: movie.id})
      let modal = document.getElementById("myModal");
      modal.style.display = "block";
    }
    
    render() {
        return (
            <div className='searchPage'>
                <h2>Search</h2>
                <input placeholder="Movie Name" onChange={this.handleChange}></input>
                <button onClick={this.searchMovies}>Search</button>
                {this.props.reduxState.searchResults.map(movie => 
                // <SearchMoviesChild key={movie.id} movie={movie}/>
                  <div className="moviesList" key={movie.id}>
                    <div className="moviesListInner"><img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt="Movie Poster"/></div>
                    <div className="moviesListInner">
                      <b>{movie.title}</b> 
                      <br></br>
                      <div className="overview">{movie.overview}</div>
                      <br></br>
                      <button onClick={()=>this.showSelectList(movie)}>Add To List</button>
                      <button onClick={()=>this.getInfo(movie)}>More</button>
                      </div>
                      <div id="myModal" className="modal">
                    <div className="modal-content">
                      <span onClick={this.closeModal} className="close">&times;</span>
                      <p>Select List: </p>
                      <select onChange={this.selectList}>
                        <option key="0" value="0">Select List</option>
                        {this.props.reduxState.collections.map(listOption =>
                          <option key={listOption.id} value={listOption.id}>{listOption.list_title}</option>
                        )}
                      </select>
                      <button onClick={()=>this.saveToList(movie)}>Save</button>
                    </div>
                  </div>
                  </div>
                  )}
                  
            </div>
        )
    }
}
const mapStateToProps = reduxState => ({
    reduxState
    });

export default connect(mapStateToProps)(SearchMovies);