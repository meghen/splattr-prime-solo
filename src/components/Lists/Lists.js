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
                        <ListItem key={listTitle.id} listTitle={listTitle}/>
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