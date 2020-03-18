import { connect } from 'react-redux';
// import LogOutButton from '../LogOutButton/LogOutButton';
import React, {Component} from 'react';
 
class UserPage extends Component {
  state = {
    movie: []
  }
  componentDidMount(){
    this.getMovies();
  }
  getMovies=()=>{
    console.log('hey');
    this.props.dispatch({type: 'FETCH_MOVIES'})   
  }
    render() {
        return (
            <div className='welcome'>
              <h2>Welcome, {this.props.reduxState.user.username}</h2>
              {this.props.reduxState.homepage.map(movie => 
                  <div className="moviesList" key={movie.id}>
                    <div className="moviesListInner"><img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt="Movie Poster"/></div>
                    <div className="moviesListInner"><b>{movie.title}</b> <br></br>{movie.overview}</div>
                  </div>)}
              {/* <p>Your ID is: {props.user.id}</p> */}
              {/* <LogOutButton className="log-in" /> */}
            </div>
        )
    }
}


const mapStateToProps = reduxState => ({
reduxState
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
