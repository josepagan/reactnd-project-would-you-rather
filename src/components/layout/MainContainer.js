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
    <div >
      <div>main container</div>
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
          {/* QuestionPoll will pick the id from the URL(with useParams),
          not sure if that conflicts with the store as single source of truth
          maybe consider alternative as explained at
          https://flaviocopes.com/react-router-data-from-route/  */}
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