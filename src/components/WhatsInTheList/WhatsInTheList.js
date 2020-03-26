import React, {Component} from 'react';
import {connect} from 'react-redux';

class WhatsInTheList extends Component {
    componentDidMount() {
        console.log('this.props.history.state ',this.props.history.location.state);
        
        this.props.dispatch({type: 'GET_IN_LIST', payload: this.props.history.location.state})
    }
    render() {
        return (
            <div className=''>
                {JSON.stringify(this.props.reduxState.listInner)}
            </div>
        )
    }
}
const mapStateToProps = reduxState => ({
reduxState
});
export default connect(mapStateToProps)(WhatsInTheList);