import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../UserPage/UserPage.css'

class SearchMovies extends Component {
    state = {
        searchQuery: ''
    }
    saveToList=()=>{
      /// - NEED TO SET UP DISPATCH HERE CAPTURING THIS.STATE.LIST
      this.props.dispatch({type: 'SET_LIST', payload: this.state.list})
      let modal = document.getElementById("myModal");
      modal.style.display = "none";
    }
    selectList=(event)=>{    
      this.setState({list: event.target.value})
    }
    showSelectList=()=>{
      let modal = document.getElementById("myModal");
      modal.style.display = "block";
    }
    getInfo=(movie)=>{        
        //routes to movies details page, passing movie's id in as url router
        this.props.history.push(`/details/${movie.id}`)
    }
    handleChange=(event)=>{
        this.setState({searchQuery: event.target.value})
    }
    searchMovies=()=>{        
        this.props.dispatch({type: 'SEARCH_MOVIES', payload: this.state.searchQuery})        
    }
    render() {
        return (
            <div className='searchPage'>
                <h1>Search</h1>
                <input placeholder="Movie Name" onChange={this.handleChange}></input>
                <button onClick={this.searchMovies}>Search</button>
                {this.props.reduxState.searchResults.map(movie => 
                  <div className="moviesList" key={movie.id}>
                    <div className="moviesListInner"><img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt="Movie Poster"/></div>
                    <div className="moviesListInner">
                      <b>{movie.title}</b> 
                      <br></br>
                      <div className="overview">{movie.overview}</div>
                      <br></br>
                      <button onClick={this.showSelectList}>Add To List</button>
                      <button onClick={()=>this.getInfo(movie)}>More</button>
                      </div>
                  </div>)}
                  <br/>
                  <button className="pageBtn">Previous Page</button>
                  <button className="pageBtn">Next Page</button>
            </div>
        )
    }
}
const mapStateToProps = reduxState => ({
    reduxState
    });

export default connect(mapStateToProps)(SearchMovies);