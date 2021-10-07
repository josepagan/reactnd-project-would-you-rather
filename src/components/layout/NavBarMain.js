/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import { React, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { useSelector, useDispatch } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import NavUserInfo from '../NavUserInfo';




export default function NavBarMain() {

  return (

    <div className="topnav">
      <NavLink
        className="nav-el"
        activeClassName="active"
        to={"/"
        }>Questions</NavLink>
      <NavLink
        className="nav-el"
        activeClassName="active"
        to={"/new-question"}
      >New Question</NavLink>
      <NavLink
        className="nav-el leaderboard"
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