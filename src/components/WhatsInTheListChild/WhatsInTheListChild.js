import React, {Component} from 'react';
import '../ListItem/ListItem.css';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class WhatsInTheListChild extends Component {
    getInfo=(movie)=>{
        //routes to movies details page, passing movie's id in as url router    
        this.props.history.push({
          pathname: `/details/${movie.id}`,
          state: {movie: movie}
        })  
    }
    deleteMovie=(movie)=>{
        this.props.dispatch({type: 'DELETE_MOVIE', payload: movie.movie_id})        
    }
    render() {
        return (
                <div className="listDisplay">
                    <span className="listResults">
                        <button onClick={()=>this.getInfo(this.props.moviesInList)} className="listTitleButton">{this.props.moviesInList.title}</button>
                        <button onClick={()=>this.deleteMovie(this.props.moviesInList)}>Delete</button>
                    </span>
                </div>
        )
    }
}
const mapStateToProps = reduxState => ({
reduxState
});
export default withRouter(connect(mapStateToProps)(WhatsInTheListChild));