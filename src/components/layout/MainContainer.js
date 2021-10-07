/* eslint-disable no-unused-vars */

import { React, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import { useSelector, useDispatch } from 'react-redux'
import { Link, Route, Switch, useHistory, Redirect } from 'react-router-dom';
import PrivateRoute from '../routing/PrivateRoute';
import { LinkContainer } from 'react-router-bootstrap';
import LoginForm from '../LoginForm';
import NewQuestionForm from '../NewQuestionForm';
import Questions from '../Questions';
import QuestionPoll from '../QuestionPoll';



const MainContainer = () => {
  const authed = useSelector(state => state.auth)

  return (
    <div className="main-container" >
      <Switch>
        <Route exact path="/">
          {authed ? <Redirect to="/questions" /> : <LoginForm />}
        </Route>
        <PrivateRoute path={"/new-question"}>
          <NewQuestionForm />
        </PrivateRoute>
        <Route exact path={"/login"}>
          {authed ? <Redirect to="/questions" /> : <LoginForm />}
        </Route>
        <PrivateRoute exact path ={"/questions/:id"}>
          <QuestionPoll />
        </PrivateRoute>
        <PrivateRoute path={"/questions"}>
          <Questions />
        </PrivateRoute>

      </Switch>
    </div>
  )
}

export default MainContainer