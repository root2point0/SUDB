import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavMenu extends Component {
  
  navClose = (event) => {
    document.getElementById("menuSideNav").style.width = "0px";
    document.getElementById("menuSideNav").style.display = "navText";
  };

  render() {
    return (
      <div className="sideNav" id="menuSideNav">
        <button
          className="navCloseButton navLink"
          onClick={(event) => this.navClose(event)}
        >
          &times;
        </button>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/about">
          About
        </Link>
        <Link className="navLink" to="/date">
          Blind Date
        </Link>
        {
          this.props.user
            ? <>
                <Link className="navLink" to="/list">My Lists</Link>
                <Link className="navLink" to="/" onClick={() => this.props.handleLogout()}>Log Out</Link>
              </>
            : <Link className="navLink" to="/login" onClick={() => this.props.toLogin()}>
              Log In
            </Link>
        }
      </div>
    );
  }
}
