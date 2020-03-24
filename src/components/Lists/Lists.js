import React, {Component} from 'react';
import {connect} from 'react-redux';

class Lists extends Component {
    componentDidMount(){
        this.getLists();
    }
    getLists=()=>{
        this.props.dispatch({type: 'GET_LIST_TITLES'})
    }
    render() {
        return (
            <div className='lists'>
                <h2>List page</h2>
                <h3>Placeholder for ADD LIST</h3>
                <div>
                    {this.props.reduxState.collections.map(listTitle => <p>{listTitle.list_title}</p>)}
                </div>
            </div>
        )
    }
}
const mapStateToProps = reduxState => ({
    reduxState
    });
export default connect(mapStateToProps)(Lists);