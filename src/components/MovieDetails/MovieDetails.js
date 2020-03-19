import React, {Component} from 'react';
import {connect} from 'react-redux';
import './MovieDetails.css'
class MovieDetails extends Component {
    state = {
        movieId: 0,
        movieNotes: '',
        noteTextarea: true
    }
    componentDidMount(){
        const pathnameParts = this.props.history.location.pathname.split('details/')
        const movieId = pathnameParts[1]
        this.setState({movieId: movieId})
    }
    handleChange=(event)=>{
        console.log('in handlechange', event.target.value);
        this.setState({movieNotes: event.target.value})
    }
    saveNotes=()=>{
        this.setState({noteTextarea: !this.state.noteTextarea})
        this.props.dispatch({type: 'SET_MOVIES', payload: this.state.movieNotes})
    }
    seeAllMovies=()=>{
        this.props.history.push(`/#/home`)
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
                                        <textarea onChange={this.handleChange}>{this.state.movieNotes}</textarea>
                                        <button onClick={this.saveNotes}>Save</button>
                                    </> :
                                    <>
                                        <p>{this.state.movieNotes}</p>
                                        <button onClick={this.saveNotes}>Edit</button>
                                    </>
                                }
                            </p>
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