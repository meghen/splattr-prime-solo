import { connect } from 'react-redux';
import React, {Component} from 'react';
import './UserPage.css';
class UserPage extends Component {
  state = {
    movie: [],
    list: ''
  }
  closeModal=()=>{
    let modal = document.getElementById("myModal");
    // let span = document.getElementsByClassName("close")[0];
    modal.style.display = "none";
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
                      {movie.overview}
                      <br></br>
                      <button onClick={this.showSelectList}>Add To List</button>
                      <button onClick={()=>this.getInfo(movie)}>More</button>
                      </div>
                  </div>)}

                  {/* testing modal below */}
                  <div id="myModal" className="modal">
                    <div className="modal-content">
                      <span onClick={this.closeModal} className="close">&times;</span>
                      <p>Select List: </p>
                      <select onChange={this.selectList}>
                        <option value="creatureFeature">Creature Feature</option>
                        <option value="favs">Favs</option>
                        <option value="recs">Recommendations I won't look at</option>
                      </select>
                      <button onClick={this.saveToList}>Save</button>
                    </div>
                  </div>
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
