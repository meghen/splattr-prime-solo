import React, {Component} from 'react';
import {connect} from 'react-redux';
import ListItem from '../ListItem/ListItem';

class Lists extends Component {
    state={
        title: '',
        isLoaded: false
    }
    closeModal=()=>{
        let modal = document.getElementById("myModal");
        modal.style.display = "none";
    }
    createList=()=>{
        let modal = document.getElementById("myModal");
        modal.style.display = "block";
    }
    handleChange=(event)=>{
        this.setState({title: event.target.value})
    }
    saveNewList=()=>{
        let modal = document.getElementById("myModal");
        modal.style.display = "none";
        this.props.dispatch({type: 'CREATE_NEW_LIST', payload: this.state.title})
    }
    render() {
        return (
            <div className='lists'>
                <h2>List page</h2>
                <button onClick={this.createList} className="newListBtn">New List</button>
                <div>
                    {this.props.reduxState.collections.map(listTitle => 
                        <ListItem key={listTitle.id} listTitle={listTitle}/>
                    )}
                </div>
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
export default connect(mapStateToProps)(Lists);