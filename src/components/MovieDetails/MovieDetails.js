import React, {Component} from 'react';
import {connect} from 'react-redux';
import './MovieDetails.css';

class MovieDetails extends Component {
    state = {
        movieId: 0,
        movieNotes: '',
        rating: 0,
        userId: 0,
        noteTextarea: false
    }
    closeModal=()=>{
        let modal = document.getElementById("myModal");
        // let span = document.getElementsByClassName("close")[0];
        modal.style.display = "none";
    }
    componentDidMount(){
        const pathnameParts = this.props.history.location.pathname.split('details/')
        const movieId = pathnameParts[1]
        this.setState({movieId: movieId}) 
        this.setState({userId: this.props.reduxState.user.id})
        this.getNotes();
    }
    getNotes=()=>{
        // console.log(' checkign state', this.props.reduxState.user.id);
        this.props.dispatch({type:'FETCH_NOTES', payload: this.props.reduxState.user.id})
    }
    handleChange=(event)=>{
        console.log('in handlechange', event.target.value);
        this.setState({movieNotes: event.target.value})
    }
    saveNotes=()=>{
        this.setState({noteTextarea: !this.state.noteTextarea})
        this.props.dispatch({type: 'SET_MOVIES', payload: this.state})
    }
    seeAllMovies=()=>{
        this.props.history.push(`/#/home`)
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
            <div className='movieDetails'>
                {/* {JSON.stringify(this.props.reduxState.homepage)} */}
                {this.props.reduxState.homepage.map(movie => 
                        // eslint-disable-next-line
                        (this.state.movieId == movie.id) ?
                        <>
                        <div className="movieDetailCard"> 
                            <img src={`https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`} alt="Movie Backdrop"/>
                            <h3>{movie.title}</h3>
                            <p>
                                <b>Release Date: </b><br/>{movie.release_date} <br/><br/>
                                <b>Summary: </b><br/>{movie.overview} <br/><br/>
                                <b>Notes: </b><br/>
                                {this.state.noteTextarea ?
                                    <>
                                        <textarea onChange={this.handleChange}>{this.props.reduxState.gotNotes}</textarea>
                                        <button onClick={this.saveNotes}>Save</button>
                                    </> :
                                    <>
                                        {this.props.reduxState.gotNotes}
                                        <button onClick={this.saveNotes}>Edit</button>
                                    </>
                                }
                            </p>
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
                            <button onClick={this.showSelectList}>Add To List</button>
                            <button onClick={this.seeAllMovies}>Back To All Movies</button>
                        </div>
                        </>
                        //empty JSX tags for else
                        : <></>
                )}
            </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})
export default connect(putReduxStateOnProps)(MovieDetails);