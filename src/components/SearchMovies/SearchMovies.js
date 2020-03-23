import React, {Component} from 'react';

class SearchMovies extends Component {
    searchMovies=()=>{
        console.log('in search movies');
        
    }
    render() {
        return (
            <div className=''>
                <h1>you're in the search</h1>
                <button onClick={this.searchMovies}>Search</button>
            </div>
        )
    }
}
export default SearchMovies;