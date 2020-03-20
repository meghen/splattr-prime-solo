import React, {Component} from 'react';
import {connect} from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';

class InfoPage extends Component {
  render() {
  return (
  <div>
    <p>
      Info Page --- This will change eventually, but I'm going to store credits here for the time being
      "Haunted house icon made by wanicon at www.flaticon.com"
      Background image by JR Korpa on Unsplash.com (https://unsplash.com/photos/7NoLliK6ntc)
      <LogOutButton className="log-in" />
    </p>
  </div>
  )}
};

const mapStateToProps = reduxState => ({
  reduxState
  });
export default connect(mapStateToProps)(InfoPage);
