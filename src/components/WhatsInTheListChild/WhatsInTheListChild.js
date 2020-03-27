import React, {Component} from 'react';
import '../ListItem/ListItem.css';
import {withRouter} from 'react-router-dom';

class WhatsInTheListChild extends Component {
    getInfo=(movie)=>{
        //routes to movies details page, passing movie's id in as url router    
        this.props.history.push({
          pathname: `/details/${movie.id}`,
          state: {movie: movie}
        })  }
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
export default withRouter(WhatsInTheListChild);