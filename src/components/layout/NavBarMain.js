/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import { React, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import NavUserInfo from '../NavUserInfo';

export default function NavBarMain() {

  return (
    <div className="topnav">
      <NavLink
        className="nav-el"
        activeClassName="active"
        exact to={"/"
        }>Questions</NavLink>
      <NavLink
        className="nav-el"
        activeClassName="active"
        to={"/add"}
      >New Question</NavLink>
      <NavLink
        className="nav-el"
        activeClassName="active"
        to={"/leaderboard"}
      >Leaderboard</NavLink>
      {/* <NavLink activeClassName="active" to={}></NavLink> */}
      <div className="nav-el login">
        <NavUserInfo />
      </div>
    </div>
  )
}