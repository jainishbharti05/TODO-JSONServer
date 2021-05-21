import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import GoogleAuth from "./GoogleAuth";
import logo from "../images/logo.png";

const Header = (props) => {
  const renderUserDetails = () => {
    if (props.isSignedIn && props.firstName) {
      return (
        <span className="mx-3">
          Hello, <strong>{props.firstName}</strong>
        </span>
      );
    }
  };

  return (
    <div className="navbar nav-tabs p-0 w-100 container-sm d-flex flex-row my-1">
      <div className="justify-content-start">
        <img src={logo} alt="logo" height="45px" width="50px"/>
      </div>
      <div className="d-flex justify-content-end">
        <div className="nav-item">
          <Link to="/tasks" className="nav-link">
            Tasks
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/notes" className="nav-link">
            Notes
          </Link>
        </div>

        <div className="d-flex flex-row align-items-center">
          {renderUserDetails()}
          <GoogleAuth />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    firstName: state.auth.givenName,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps)(Header);
