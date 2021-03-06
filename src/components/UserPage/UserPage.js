import { connect } from 'react-redux';
import React, {Component} from 'react';
import './UserPage.css';

class UserPage extends Component {
  state = {
    movie: 0,
    list: 0
  }
  closeModal=()=>{
    let modal = document.getElementById("myModal");
    // let span = document.getElementsByClassName("close")[0];
    modal.style.display = "none";
  }
  // componentDidMount(){
  //   this.getMovies();
  // }
  // getMovies=()=>{
  //   this.props.dispatch({type: 'FETCH_MOVIES'})   
  // }
  getInfo=(movie)=>{
    //routes to movies details page, passing movie's id in as url router    
    this.props.history.push({
      pathname: `/details/${movie.id}`,
      state: {movie: movie}
    })  }
  saveToList=(movie)=>{
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
            <div className='welcome'>
              <h2>Welcome, {this.props.reduxState.user.username}</h2>
              {this.props.reduxState.homepage.map(movie => 
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
                  </div>)}
                  
            </div>
        )
    }
}


const mapStateToProps = reduxState => ({
reduxState
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
