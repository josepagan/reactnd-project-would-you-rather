/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import { React, useEffect } from 'react';
// import Container from 'react-bootstrap/Container'
// import Button from 'react-bootstrap/Button';
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
// import { useSelector, useDispatch } from 'react-redux'
// import { Link, Route, Switch, useHistory, Redirect } from 'react-router-dom';
// import { LinkContainer } from 'react-router-bootstrap';
import { init } from './store/utils';
import MainContainer from './components/layout/MainContainer'
// import LoginForm from './components/LoginForm';
// import PrivateRoute from './components/routing/PrivateRoute';
import NavBarMain from './components/layout/NavBarMain';

const selectShit = state => state

function App() {
 
  useEffect(() => {
    init()
  }, [])
  // if (!authedUser) return null

  return (
    <>
      <NavBarMain />
      <MainContainer />
    </>
  );
}

export default App;