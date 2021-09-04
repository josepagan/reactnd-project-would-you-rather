/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import { React, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { useSelector, useDispatch } from 'react-redux'
import { Link, Route, Switch, useHistory, Redirect } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { init } from '../../store/utils';
import MainContainer from '../../components/layout/MainContainer'
import LoginForm from '../../components/LoginForm';
import PrivateRoute from '../../components/routing/PrivateRoute';




export default function NavBarMain() {

  const select = state => {
    return state.users[state.auth]
  }

  //solution to avoid rendering problem when authedUser is undefined
  //maybe find a better solution as this is not functional and a bit too imperative
  //for my liking

  // let authedUser = useSelector(select)
  // if (authedUser === undefined) {
  //   authedUser = {};
  //   authedUser.name === "Mr. Undefined"
  // }

  //TODO learn to use selectors properly
  // console.log("authedUser", authedUser)
  const dispatch = useDispatch();

  return (

    <Navbar bg="light" expand="lg">
      <Container>
        {/* <LinkContainer to={"/"}>
            <Navbar.Brand>Would You Rather...</Navbar.Brand>
          </LinkContainer> */}
        <Nav variant="tabs">

          <LinkContainer to={"/"}>
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to={"/new-question"}>
            <Nav.Link>New Question</Nav.Link>
          </LinkContainer>
          <LinkContainer to={"/link-container"}>
            <Nav.Link>Leaderboard</Nav.Link>
          </LinkContainer>

        </Nav>


        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">

          {/* div required so {' '} works for spacing user and logout button */}
          {/* //TODO make this div a proper component */}
          <div>
            {
              authedUser !== undefined ?
              
                (
                  <div>
                    <Navbar.Text>
                      Signed in as: <a href="#login">{authedUser && authedUser.name}</a>
                    </Navbar.Text>
                    {' '}
                    <Button variant="dark" size="sm" onClick={() => { dispatch({ type: 'auth/logoutClicked' }) }}>Logout</Button>
                  </div>
                  // TODO this is not rendering as expected, I suspect I have to refactor navbar to behave properly
                  // i know whats going on, navbar is doubled, because it was already refactored, but I carried on using the one in App, thats why things dont seem to change much lol

                ) : <div>Not Logged in at all wtf mate</div>

            }
            {/* <Navbar.Text>
                Signed in as: <a href="#login">{authedUser.name}</a>
              </Navbar.Text> */}
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )

}