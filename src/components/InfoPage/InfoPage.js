import React, {Component} from 'react';
import {connect} from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class InfoPage extends Component {
  render() {
  return (
  <div>
    <p>
      Info Page --- This will change eventually, but I'm going to store credits here for the time being
      "Haunted house icon made by wanicon at www.flaticon.com"
      {JSON.stringify(this.props.reduxState)}
      <LogOutButton className="log-in" />
    </p>
  </div>
  )}
};

const mapStateToProps = reduxState => ({
  reduxState
  });
export default connect(mapStateToProps)(InfoPage);
