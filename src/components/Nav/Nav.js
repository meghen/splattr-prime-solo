import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';

const Nav = (props) => (
  <div className="nav">
    <Link to="/home">
      <h2 className="nav-title">Splattr (∗r)</h2>
    </Link>
    <div className="nav-bar">
      {/* <Link className="nav-link" to="/home">
      
        {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
        {/* {props.user.id ? 'Home' : 'Login / Register'} */}
      {/* </Link> */}
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {props.user.id && (
        <>
          <Link className="nav-link" to="/home">
            <img className="nav-icons" src="https://image.flaticon.com/icons/svg/2286/2286890.svg" alt="Icon made by Wanicon at www.flaticon.com"/>
            <br></br>
            Home
          </Link>
          <Link className="nav-link" to="/info">
          <img className="nav-icons" src="https://image.flaticon.com/icons/svg/1308/1308359.svg" alt="Icon made by Wanicon at www.flaticon.com"/>
            <br></br>
            Info
          </Link>
          <Link className="nav-link" to="/lists">
            <img className="nav-icons" src="https://image.flaticon.com/icons/svg/1750/1750050.svg" alt="Icon made by Wanicon at www.flaticon.com"/>
            <br></br>
            Lists
          </Link>
          <Link className="nav-link" to="/search">
            <img className="nav-icons" src="https://image.flaticon.com/icons/svg/2286/2286880.svg" alt="Icon made by Wanicon at www.flaticon.com"/>
            <br></br>
            Search
          </Link>
        </>
      )}
    </div>
  </div>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
