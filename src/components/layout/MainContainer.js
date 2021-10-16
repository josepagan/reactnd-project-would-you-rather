/* eslint-disable no-unused-vars */

import { React, useEffect } from 'react';
// import { useSelector } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from '../routing/PrivateRoute';
import LoginForm from '../LoginForm';
import NewQuestionForm from '../NewQuestionForm';
import QuestionsList  from '../QuestionList';
import QuestionPoll from '../QuestionPoll';
import Page404 from '../page404';

const MainContainer = () => {
  // const authed = useSelector(state => state.auth)

  return (
    <div className="main-container" >
      <Switch>
        <Route exact path={"/login"} component={LoginForm}/>
        <Route exact path={"/404"} component={Page404}/>
        <PrivateRoute path={"/add"} component={NewQuestionForm}/>
        <PrivateRoute exact path ={"/questions/:id"} component={QuestionPoll}/>
        <PrivateRoute exact path={["/"]} component={QuestionsList}/>
      </Switch>
    </div>
  )
}

export default MainContainer