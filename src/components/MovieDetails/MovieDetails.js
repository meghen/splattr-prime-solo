import React, {Component} from 'react';
import {connect} from 'react-redux';
import './MovieDetails.css';

class MovieDetails extends Component {
    state = {
        movieId: 0,
        movieNotes: '',
        noteTextarea: false,
        firstNote: true,
        list: 0
    }
    //allows us to only see the add note screen once. after that users can edit the note, but users are only allowed one note
    changeFirstNoteBoolean=()=>{
        this.setState({firstNote: !this.state.firstNote})
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
    //only toggles from display to input
    editNotes=()=>{
        this.setState({noteTextarea: !this.state.noteTextarea})
    }
    //grabs prev written notes
    // getNotes=()=>{
    //     // console.log(' checkign state', this.props.reduxState.user.id);
    //     this.props.dispatch({type:'FETCH_NOTES'})
    // }
    //catches typed input and saves to state
    handleChange=(event)=>{
        console.log('in handlechange', event.target.value);
        this.setState({movieNotes: event.target.value})
    }
    //toggles from input to save/display, also sends dispatch to save in db
    saveNotes=()=>{
        this.setState({noteTextarea: !this.state.noteTextarea})
        this.props.dispatch({type: 'SET_MOVIES', payload: this.state})
    }
    //routes back to prev page
    seeAllMovies=()=>{        
        this.props.history.goBack()
    }
    //for save btn in pop up modal. sends dispatch to save in db
    saveToList=()=>{
        /// - NEED TO SET UP DISPATCH HERE CAPTURING THIS.STATE.LIST
        console.log('why don you work ', this.state.list, this.state.movieId);
        
        this.props.dispatch({type: 'SAVE_TO_LIST', payload: {listId: this.state.list, movieId: this.state.movieId}})
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
                {/* {this.props.reduxState.homepage.map(
                    movie => 
                        // eslint-disable-next-line */}
                        {(this.state.movieId == movie.id) ?
                        <>
                        <div key={movie.id} className="movieDetailCard"> 
                            <img src={`https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`} alt="Movie Backdrop"/>
                            <h3>{movie.title}</h3>
                            <p>
                                <b>Release Date: </b><br/>{movie.release_date} <br/><br/>
                                <b>Summary: </b><br/>{movie.overview} <br/><br/>
                                <b>Notes: </b><br/>
                                {this.state.noteTextarea ?
                                    <>
                                        {this.props.reduxState.gotNotes}
                                        <button onClick={this.editNotes}>Edit</button>
                                    </> :
                                    (this.state.firstNote ?
                                        <>
                                            You haven't added a note!
                                            <button onClick={this.changeFirstNoteBoolean}>Add Note</button>
                                        </> :
                                        <>
                                            <textarea onChange={this.handleChange}>{this.props.reduxState.gotNotes}</textarea>
                                            <button onClick={this.saveNotes}>Save</button>                                            
                                        </>)
                                }
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
                {/* )} */}
            </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})
export default connect(putReduxStateOnProps)(MovieDetails);