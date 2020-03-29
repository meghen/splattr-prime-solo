import React, {Component} from 'react';
import {connect} from 'react-redux';
import WhatsInTheListChild from '../WhatsInTheListChild/WhatsInTheListChild';
import './WhatsInTheList.css'
class WhatsInTheList extends Component {
    state={
        listTitle: '',
        listId: {}
    }
    componentDidMount() {
        console.log('this.props.history.location.state ',this.props.history.location.state.id);
        this.setState({listTitle: this.props.history.location.state.name})
        this.props.dispatch({type: 'GET_IN_LIST', payload: this.props.history.location.state.id})
    }
    render() {
        return (
            <div className=''>
                <h2>{this.state.listTitle}</h2>
                {this.props.reduxState.listInner.map(moviesInList=>
                    <WhatsInTheListChild key={moviesInList.id} moviesInList={moviesInList}/>
                )}
            </div>
        )
    }
}
const mapStateToProps = reduxState => ({
reduxState
});
export default connect(mapStateToProps)(WhatsInTheList);