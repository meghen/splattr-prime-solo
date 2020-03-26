import React, {Component} from 'react';
import {connect} from 'react-redux';
import ListItem from '../ListItem/ListItem';

class Lists extends Component {
    createList=()=>{
        let modal = document.getElementById("myModal");
        modal.style.display = "block";
    }
    render() {
        return (
            <div className='lists'>
                <h2>List page</h2>
                <button onClick={this.createList} className="newListBtn">New List</button>
                <div>
                    {this.props.reduxState.collections.map(listTitle => 
                    <ListItem listTitle={listTitle}/>
                        // <div key={listTitle.id} className="listDisplay">
                        //     {this.state.titleEdit ? 
                        //     <>
                        //         <span className="listResults">
                        //             <input onChange={this.handleChange}></input>
                        //             <button onClick={this.updateTitle}>Save</button>
                        //             <button onClick={()=>this.deleteList(listTitle)}>Delete List</button>
                        //         </span>
                        //     </> : 
                        //     <>
                        //         <span className="listResults">
                        //             <button onClick={this.showListInner} className="listTitleButton">{listTitle.list_title}</button>
                        //             <button onClick={this.toggleTitle}>Edit</button>
                        //             <button onClick={()=>this.deleteList(listTitle)}>Delete</button>
                        //         </span>
                        //     </>} 
                        //     <div id="myModal" className="modal">
                        //         <div className="modal-content">
                        //         <span onClick={this.closeModal} className="close">&times;</span>
                        //         <label> Title:
                        //             <input onChange={this.handleChange}></input></label>                      
                        //         <button onClick={this.saveNewList}>Save</button>
                        //         </div>
                        //     </div>
                        // </div>
                        )}
                </div>
            </div>
        )
    }
}
const mapStateToProps = reduxState => ({
    reduxState
    });
export default connect(mapStateToProps)(Lists);