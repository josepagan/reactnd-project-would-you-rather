/* eslint-disable no-unused-vars */

import { React, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from '../routing/PrivateRoute';
import LoginForm from '../LoginForm';
import NewQuestionForm from '../NewQuestionForm';
import Questions from '../Questions';
import QuestionPoll from '../QuestionPoll';

const MainContainer = () => {
  const authed = useSelector(state => state.auth)

  return (
    <div className="main-container" >
      <Switch>
        <Route exact path={"/login"}>
          {authed ? <Questions /> : <LoginForm />}
        </Route>
        <PrivateRoute path={"/new-question"} component={NewQuestionForm}/>
        <PrivateRoute exact path ={"/questions/:id"} component={QuestionPoll}/>
        <PrivateRoute path={["/questions","/"]} component={Questions}/>
      </Switch>
    </div>
  )
}

export default MainContainer