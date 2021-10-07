/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling


import { React } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom'


const PrivateRoute = ({ children, ...rest }) => {
  let auth = useSelector(state => state.auth)

  return (
    <Route
      {...rest}
      render={() =>
        auth ? (
          children
        ) : (
          <Redirect
            to={"/login"}
          />
        )
      }
    />
  );
}

export default PrivateRoute