/* eslint-disable no-unused-vars */

import { React, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { useSelector, useDispatch } from 'react-redux'
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

//  import './App.css';




const LinkComponent = () => {




  return (<h1>
    LinkComponent is here here is all the shit
  </h1>)
}



const selectShit = state => state

//TODO use react reduct to dispatch anything using the button just created, 

function App() {
  const shit = useSelector(selectShit)
  const dispatch = useDispatch();
  let history = useHistory()



  console.log("store from App component", shit)

  useEffect(() => {
    return history.listen((location) => { 
       console.log(`You changed the page to: ${location.pathname}`) 
    }) 
 },[history]) 

  return (
    <>

      <Navbar bg="light" expand="lg">
        <LinkContainer to={"/"}>
          <Navbar.Brand>React-Bootstrap</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* LinkContainer wrapper adds react-router features of Link while keeping style of Nav.link */}
            <LinkContainer to={"/"}>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/link-container"}>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

          </Nav>
        </Navbar.Collapse>
      </Navbar>


      <Container >
        <h1>OMG main container</h1>
        <Switch>
          <Route path={"/link-container"}>
            <LinkComponent />
          </Route>
        </Switch>


        {/* <Button variant="primary"
          onClick={() => {
            dispatch({
              type: 'apiCallBegan', payload: {
                feature: 'users',
                method: 'get',
                data: {},
                onSuccess: 'users/usersReceived',
                onError: 'apiRequestfailed'
              }
            })
          }}>Primary
        </Button> */}
      </Container>
    </>
  );
}

export default App;