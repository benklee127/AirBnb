import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";
import SignupFormModal from "../SignupFormModal";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className="right-nav">
        <NavLink
          exact
          to="/spots/new"
          style={{ textDecoration: "none" }}
          className="create-spot"
        >
          Create a New Spot
        </NavLink>
        <ProfileButton user={sessionUser} className="profile-button" />
      </div>
    );
  } else {
    sessionLinks = (
      <div className="right-nav">
        <OpenModalButton
          buttonText="Log In"
          modalComponent={<LoginFormModal />}
        />
        <OpenModalButton
          buttonText="Sign Up"
          modalComponent={<SignupFormModal />}
        />
      </div>
    );
  }

  return (
    <div className="nav">
      <div className="left-nav">
        <NavLink
          exact
          to="/"
          className="home-logo"
          style={{ textDecoration: "none" }}
        >
          <i class="fa-solid fa-tree"></i>
        </NavLink>
        <NavLink
          exact
          to="/"
          className="home-title"
          style={{ textDecoration: "none" }}
        >
          <div>Tree BnB</div>
        </NavLink>
      </div>
      {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;
