import React, {Component} from 'react';
import {connect} from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './InfoPage.css'

class InfoPage extends Component {
  render() {
  return (
  <div>
    <div className="selectionBars">Credits</div>
    <div className="selectionBars">Nav Bar Icons made by Wanicon at www.flaticon.com</div>
    <div className="selectionBars">Background Image by JR Korpa on Unsplash.com</div>
    <div className="selectionBars"><LogOutButton className="log-in" /></div>
  </div>
  )}
};

const mapStateToProps = reduxState => ({
  reduxState
  });
export default connect(mapStateToProps)(InfoPage);
