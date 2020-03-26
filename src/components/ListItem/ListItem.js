import React, {Component} from 'react';
import {connect} from 'react-redux';
import './ListItem.css';

class ListItem extends Component {
    state = {
        titleEdit: false,
        title: '',
    }
    closeModal=()=>{
        let modal = document.getElementById("myModal");
        modal.style.display = "none";
    }
    deleteList=(title)=>{        
        this.props.dispatch({type: 'DELETE_LIST', payload: title.id})
    }
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
                                    <button onClick={this.showListInner} className="listTitleButton">{this.props.listTitle.list_title}</button>
                                    <button onClick={this.toggleTitle}>Edit</button>
                                    <button onClick={()=>this.deleteList(this.props.listTitle)}>Delete</button>
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
                        </div>
        )
    }
}
const mapStateToProps = reduxState => ({
reduxState
});
export default connect(mapStateToProps)(ListItem);