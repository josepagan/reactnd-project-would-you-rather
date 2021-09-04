/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import { React, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { useSelector, useDispatch } from 'react-redux'
import { Link, Route, Switch, useHistory, Redirect } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { init } from './store/utils';
import MainContainer from './components/layout/MainContainer'
import LoginForm from './components/LoginForm';
import PrivateRoute from './components/routing/PrivateRoute';
import NavBarMain from './components/layout/NavBarMain';

const selectShit = state => state

function App() {
  const select = state => {
    return state.users[state.auth]
  }

  //solution to avoid rendering problem when authedUser is undefined
  //maybe find a better solution as this is not functional and a bit too imperative
  //for my liking

  let authedUser = useSelector(select)
  if (authedUser === undefined) {
    authedUser = {};
    authedUser.name === "Mr. Undefined"
  }

  //TODO learn to use selectors properly
  console.log("authedUser", authedUser)

  const dispatch = useDispatch();
  let history = useHistory()


  // useEffect(() => {
  //   return history.listen((location) => {
  //     console.log(`You changed the page to: ${location.pathname}`)
  //   })
  // }, [history])

  //data initialising
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