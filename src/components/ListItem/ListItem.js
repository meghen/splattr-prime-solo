import React, {Component} from 'react';
import {connect} from 'react-redux';
import './ListItem.css';
import {withRouter} from 'react-router-dom';

class ListItem extends Component {
    state = {
        titleEdit: false,
        title: '',
    }

    deleteList=(title)=>{        
        this.props.dispatch({type: 'DELETE_LIST', payload: title.id})
    }
    handleChange=(event)=>{
        this.setState({title: event.target.value})
    }
    showListInner=(title)=>{
        console.log('in list inner!');
        this.props.history.push({
            pathname:'/in-lists',
            state: {
                id: title.id, 
                name: title.list_title
            }
        }) 
    }
    toggleTitle=()=>{
        this.setState({titleEdit: !this.state.titleEdit})
    }
    updateTitle=(title)=>{        
        this.props.dispatch({type: 'PUT_LIST_TITLE', payload: {title: this.state.title, movieId: title.id}})
        this.setState({titleEdit: !this.state.titleEdit})
    }
    render() {
        return (
            <div key={this.props.listTitle.id} className="listDisplay">
                            {this.state.titleEdit ? 
                            <>
                                <span className="listResults">
                                    <input onChange={this.handleChange}></input>
                                    <button onClick={()=>this.updateTitle(this.props.listTitle)}>Save</button>
                                    <button onClick={()=>this.deleteList(this.props.listTitle)}>Delete List</button>
                                </span>
                            </> : 
                            <>
                                <span className="listResults">
                                    <button onClick={()=>this.showListInner(this.props.listTitle)} className="listTitleButton">{this.props.listTitle.list_title}</button>
                                    <button onClick={this.toggleTitle}>Edit</button>
                                    <button onClick={()=>this.deleteList(this.props.listTitle)}>Delete</button>
                                </span>
                            </>} 
                            
                        </div>
        )
    }
}
const mapStateToProps = reduxState => ({
reduxState
});
export default withRouter(connect(mapStateToProps)(ListItem));