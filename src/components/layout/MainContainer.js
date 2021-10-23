/* eslint-disable no-unused-vars */

import { React, useEffect } from 'react';
// import { useSelector } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from '../routing/PrivateRoute';
import LoginForm from '../LoginForm';
import NewQuestionForm from '../NewQuestionForm';
import QuestionsList  from '../QuestionList';
import QuestionRoute from '../QuestionRoute';
import Page404 from '../page404';
import Leaderboard from '../Leaderboard';

const MainContainer = () => {
  // const authed = useSelector(state => state.auth)

  return (
    <div className="main-container" >
      <Switch>
        <Route exact path={"/login"} component={LoginForm}/>
        <Route exact path={"/404"} component={Page404}/>
        <Route exact path={"/leaderboard"} component={Leaderboard}/>
        <PrivateRoute path={"/add"} component={NewQuestionForm}/>
        <PrivateRoute exact path ={"/questions/:id"} component={QuestionRoute}/>
        <PrivateRoute exact path={["/"]} component={QuestionsList}/>
      </Switch>
    </div>
  )
}

export default MainContainer