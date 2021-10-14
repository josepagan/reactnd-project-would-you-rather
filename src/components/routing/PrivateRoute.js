/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
/* eslint-disable no-unused-vars */



import { React } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom'


const PrivateRoute = ({ component:Component,location, ...rest }) => {
  let auth = useSelector(state => state.auth)

  return (
    <Route
      {...rest}
      render={() =>
        auth ? 
        <Component {...rest}/> 
        : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute