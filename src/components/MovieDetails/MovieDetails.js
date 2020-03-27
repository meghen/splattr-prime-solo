import React, {Component} from 'react';
import {connect} from 'react-redux';
import './MovieDetails.css';

class MovieDetails extends Component {
    state = {
        movieId: 0,
        list: 0
    }
    //closes pop up box
    closeModal=()=>{
        let modal = document.getElementById("myModal");
        // let span = document.getElementsByClassName("close")[0];
        modal.style.display = "none";
    }
    //page load
    componentDidMount(){
        console.log('history in movie dtails', this.props.history.location.state.movie);
        
        const pathnameParts = this.props.history.location.pathname.split('details/')
        const movieId = pathnameParts[1]
        this.setState({movieId: movieId}) 
        // this.setState({userId: this.props.reduxState.user.id})
        // this.getNotes();
    }
    //routes back to prev page
    seeAllMovies=()=>{        
        this.props.history.goBack()
    }
    //for save btn in pop up modal. sends dispatch to save in db
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
    //captures selection in pop up modal drop down
    selectList=(event)=>{    
    this.setState({list: event.target.value})
    }
    //activates pop up box to appear
    showSelectList=()=>{
    let modal = document.getElementById("myModal");
    modal.style.display = "block";
    }
    render() {
        let movie = this.props.history.location.state.movie
        return (
            <div className='movieDetails'>
                        {(this.state.movieId == movie.id) ?
                        <>
                        <div key={movie.id} className="movieDetailCard"> 
                            <img src={`https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`} alt="Movie Backdrop"/>
                            <h3>{movie.title}</h3>
                            <p>
                                <b>Release Date: </b><br/>{movie.release_date} <br/><br/>
                                <b>Summary: </b><br/>{movie.overview} <br/><br/>
                            </p>
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
                                <button onClick={this.saveToList}>Save</button>
                                </div>
                            </div>
                            <button onClick={this.showSelectList}>Add To List</button>
                            <button onClick={this.seeAllMovies}>Back To All Movies</button>
                        </div>
                        </>
                        //empty JSX tags for "else"
                        : <></>}
            </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})
export default connect(putReduxStateOnProps)(MovieDetails);