import React, {Component} from 'react';
import {connect} from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './InfoPage.css'

class InfoPage extends Component {
  render() {
  return (
  <div>
    <div className="selectionBars">Info Page --- This will change eventually, but I'm going to store credits here for the time being</div>
    <div className="selectionBars">"Haunted house icon made by [wanicon](https://www.flaticon.com/authors/wanicon) at www.flaticon.com"</div>
    <div className="selectionBars">Background image by JR Korpa on Unsplash.com (https://unsplash.com/photos/7NoLliK6ntc)</div>
    <div className="selectionBars"><LogOutButton className="log-in" /></div>
  </div>
  )}
};

const mapStateToProps = reduxState => ({
  reduxState
  });
export default connect(mapStateToProps)(InfoPage);
