/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
/* eslint-disable no-unused-vars */



import { React } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom'


const PrivateRoute = ({ children,component:Component, ...rest }) => {
  let auth = useSelector(state => state.auth)

  return (
    <Route
      {...rest}
      render={() =>
        auth ? 
        // (children)
        <Component {...rest}/> 
        : (
          <Redirect
            to={"/login"}
          />
        )
      }
    />
  );
}

export default PrivateRoute