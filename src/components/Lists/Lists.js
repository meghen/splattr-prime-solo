import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Lists.css';

class Lists extends Component {
    state = {
        titleEdit: false,
        title: ''
    }
    closeModal=()=>{
        let modal = document.getElementById("myModal");
        modal.style.display = "none";
    }
    // componentDidMount(){
    //     this.getLists();
    // }
    createList=()=>{
        let modal = document.getElementById("myModal");
        modal.style.display = "block";
    }
    deleteList=(title)=>{        
        this.props.dispatch({type: 'DELETE_LIST', payload: title.id})
    }
    // getLists=()=>{
    //     this.props.dispatch({type: 'GET_LIST_TITLES'})
    // }
    handleChange=(event)=>{
        this.setState({title: event.target.value})
    }
    saveNewList=()=>{
        let modal = document.getElementById("myModal");
        modal.style.display = "none";
        this.props.dispatch({type: 'CREATE_NEW_LIST', payload: this.state.title})
    }
    showListInner=()=>{
        console.log('in list inner!'); 
    }
    toggleTitle=()=>{
        this.setState({titleEdit: !this.state.titleEdit})
    }
    updateTitle=()=>{
        this.props.dispatch({type: 'PUT_LIST_TITLE', payload: this.state.title})
        this.setState({titleEdit: !this.state.titleEdit})
    }
    render() {
        return (
            <div className='lists'>
                <h2>List page</h2>
                <button onClick={this.createList} className="newListBtn">New List</button>
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
                                    <button onClick={this.showListInner} className="listTitleButton">{listTitle.list_title}</button>
                                    <button onClick={this.toggleTitle}>Edit</button>
                                    <button onClick={()=>this.deleteList(listTitle)}>Delete</button>
                                </span>
                            </>} 
                            <div id="myModal" className="modal">
                                <div className="modal-content">
                                <span onClick={this.closeModal} className="close">&times;</span>
                                <label> Title:
                                    <input onChange={this.handleChange}></input></label>                      
                                <button onClick={this.saveNewList}>Save</button>
                                </div>
                            </div>
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