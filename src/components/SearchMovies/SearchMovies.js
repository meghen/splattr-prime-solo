import React, {Component} from 'react';
import {connect} from 'react-redux';

class SearchMovies extends Component {
    state = {
        searchQuery: ''
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
                      {movie.overview}
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