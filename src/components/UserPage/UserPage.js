import { connect } from 'react-redux';
import React, {Component} from 'react';
import './UserPage.css';
class UserPage extends Component {
  state = {
    movie: []
  }
  componentDidMount(){
    this.getMovies();
  }
  getMovies=()=>{
    this.props.dispatch({type: 'FETCH_MOVIES'})   
  }
  getInfo=(movie)=>{
    //routes to movies details page, passing movie's id in as url router
    this.props.history.push(`/details/${movie.id}`)
  }
    render() {
        return (
            <div className='welcome'>
              <h2>Welcome, {this.props.reduxState.user.username}</h2>
              {this.props.reduxState.homepage.map(movie => 
                  <div className="moviesList" key={movie.id} onClick={()=>this.getInfo(movie)}>
                    <div className="moviesListInner"><img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt="Movie Poster"/></div>
                    <div className="moviesListInner"><b>{movie.title}</b> <br></br>{movie.overview}<br></br></div>
                  </div>)}
              {/* <p>Your ID is: {props.user.id}</p> */}
            </div>
        )
    }
}


const mapStateToProps = reduxState => ({
reduxState
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
