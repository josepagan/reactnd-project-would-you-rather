import { React, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

const LoginForm = () => {

  const [user, setUser] = useState("")
  const dispatch = useDispatch()

  const select = state => state.users
  const users = Object.values(useSelector(select))
  const optionsArray = users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)


  const handleSelection = (event) => {
    console.log("event/target/value", event.target.value)
    setUser(event.target.value)
  }
  const handleSubmit = (event) => {
    dispatch({
      type: 'auth/authedUser',
      payload: user
    });

    event.preventDefault()

  }

  return (
    <form onSubmit={handleSubmit}>
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
}

export default LoginForm