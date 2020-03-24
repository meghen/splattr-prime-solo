import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Lists.css';

class Lists extends Component {
    state = {
        titleEdit: false,
        title: ''
    }
    componentDidMount(){
        this.getLists();
    }
    deleteList=(title)=>{        
        this.props.dispatch({type: 'DELETE_LIST', payload: title.id})
    }
    updateTitle=()=>{
        this.props.dispatch({type: 'PUT_LIST_TITLE', payload: this.state.title})
        this.setState({titleEdit: !this.state.titleEdit})
    }
    getLists=()=>{
        this.props.dispatch({type: 'GET_LIST_TITLES'})
    }
    handleChange=(event)=>{
        this.setState({title: event.target.value})
    }
    toggleTitle=()=>{
        this.setState({titleEdit: !this.state.titleEdit})
    }
    render() {
        return (
            <div className='lists'>
                <h2>List page</h2>
                <h3>Placeholder for ADD LIST</h3>
                <div>
                    {this.props.reduxState.collections.map(listTitle => 
                        <div className="listDisplay">
                            {this.state.titleEdit ? 
                            <>
                                <span className="listResults">
                                    <input onChange={this.handleChange}></input>
                                    <button onClick={this.updateTitle}>Save</button>
                                    <button onClick={()=>this.deleteList(listTitle)}>Delete List</button>
                                </span>
                            </> : 
                            <>
                                {/* change button styling for list title so it doesn't LOOK like a button */}
                                <span className="listResults">
                                    <button>{listTitle.list_title}</button>
                                    <button onClick={this.toggleTitle}>Edit Title</button>
                                    <button onClick={()=>this.deleteList(listTitle)}>Delete List</button>
                                </span>
                            </>} 
                        </div>)}
                </div>
            </div>
        )
    }
}
const mapStateToProps = reduxState => ({
    reduxState
    });
export default connect(mapStateToProps)(Lists);