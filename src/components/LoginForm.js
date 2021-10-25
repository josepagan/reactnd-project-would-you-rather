
import { React, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, Redirect } from 'react-router';

const LoginForm = () => {

  const [user, setUser] = useState("")
  const dispatch = useDispatch()
  const { state } = useLocation()
  const auth = useSelector(state => state.auth)

  const users = Object.values(useSelector(state => state.users))
  const optionsArray = users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)

  const handleSelection = (event) => {
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
        Please login:
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