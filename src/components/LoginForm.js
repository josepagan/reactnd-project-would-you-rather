/* eslint-disable no-unused-vars */

import { React, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, Redirect } from 'react-router';

const LoginForm = () => {

  const [user, setUser] = useState("")
  const dispatch = useDispatch()
  const { state } = useLocation()
  const auth = useSelector(state => state.auth)
  console.log(state, auth)

  // const select = state => state.users
  //TODO object.values likely create new references adding performance issues
  //using reselect will solve the issue
  const users = Object.values(useSelector(state => state.users))
  const optionsArray = users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)

  useEffect(() => {
    if (auth) return console.log("OMG user authed")
  }, [auth])

  const handleSelection = (event) => {
    // console.log("event/target/value", event.target.value)
    setUser(event.target.value)
  }
  const handleSubmit = (event) => {
    dispatch({
      type: 'auth/authedUser',
      payload: user
    })

    event.preventDefault()
  }

  if (!auth) return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label>
        Pick your favorite flavor:
        <select value={user} onChange={handleSelection}>
          <option>Select an user...</option>
          {optionsArray}
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
  if (auth) return <Redirect to={state?.from || '/'} />
}

export default LoginForm