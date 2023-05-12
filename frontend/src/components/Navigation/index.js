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
            <li>
                <ProfileButton user={sessionUser} />
                <div>
                    <NavLink exact to="/spots/current">
                        Manage Spots
                    </NavLink>
                </div>
                <NavLink exact to="/spots/new">
                    Create Spot
                </NavLink>
            </li>
        );
    } else {
        sessionLinks = (
            <li className="right-nav">
                <OpenModalButton
                    buttonText="Log In"
                    modalComponent={<LoginFormModal />}
                />
                <OpenModalButton
                    buttonText="Sign Up"
                    modalComponent={<SignupFormModal />}
                />
            </li>
        );
    }

    return (
        <ul className="nav">
            <ul className="left-nav">
                <NavLink exact to="/">
                    <i class="fa-solid fa-tree">Tree & B</i>
                </NavLink>
            </ul>
            {isLoaded && sessionLinks}
        </ul>
    );
}

export default Navigation;
