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


//  import './App.css';
// const NewQuestionForm = () => {
//   return (<h1>
//     NEW QUESTION FORM HERE
//   </h1>)
// }
// const LoginForm = () => {
//   return (
//     <div>LOGIN FORM</div>
//   )
// }


// const MainContainerz = () => {
//   const authed = useSelector(state => state.auth)

//   return (
//     <Container >
//       <div>main container</div>
//       <Switch>
//         <Route exact path="/">
//           {authed ? <Redirect to="/questions" /> : <LoginForm />}
//         </Route>
//         <PrivateRoute path={"/new-question"}>
//           <NewQuestionForm />
//         </PrivateRoute>
//         <Route path={"/login"}>
//           <LoginForm />
//         </Route>
//         <PrivateRoute path={"/questions"}>
//           <Questions />

//         </PrivateRoute>
//       </Switch>
//     </Container>
//   )
// }
// const Questions = () => {
//   return <div>PRIVATE QUESTIONS PRIVATE</div>
// }
const selectShit = state => state

//TODO use react reduct to dispatch anything using the button just created, 

//shamelesly stolen from react-router tutorial
// const PrivateRoute = ({ children, ...rest }) => {
//   let auth = useSelector(state => state.auth)

//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         auth ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: location }
//             }}
//           />
//         )
//       }
//     />
//   );
// }





function App() {
  const select = state => {
    return state.users[state.auth]
  }
  const authedUser = useSelector(select)
//TODO learn to use selectors properly
console.log("authedUser", authedUser)

  const dispatch = useDispatch();
  let history = useHistory()


  useEffect(() => {
    return history.listen((location) => {
      console.log(`You changed the page to: ${location.pathname}`)
    })
  }, [history])

  //data initialising
  useEffect(() => {
    init()
  }, [])

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          {/* <LinkContainer to={"/"}>
            <Navbar.Brand>Would You Rather...</Navbar.Brand>
          </LinkContainer> */}
          <Nav variant="tabs">

            <LinkContainer to={"/"}>
              {/* <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/new-question"}> */}
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
              <Navbar.Text>
                Signed in as: <a href="#login">Mark Otto</a>
              </Navbar.Text>
              {' '}
              <Button variant="dark" size="sm" onClick={() => { dispatch({ type: 'auth/logoutClicked' }) }}>Logout</Button>
            </div>

          </Navbar.Collapse>
        </Container>
      </Navbar>

      <MainContainer />


    </>
  );
}

export default App;