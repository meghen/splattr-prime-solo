import React, {Component} from 'react';
import {connect} from 'react-redux';

class WhatsInTheList extends Component {
    render() {
        return (
            <div className=''>
                <h1>Test</h1>
            </div>
        )
    }
}
const mapStateToProps = reduxState => ({
reduxState
});
export default connect(mapStateToProps)(WhatsInTheList);