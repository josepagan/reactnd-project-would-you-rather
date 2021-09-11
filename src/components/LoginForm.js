import { React, useState } from 'react';
import { useSelector,
  //  useDispatch
   } from 'react-redux'

const LoginForm = () => {
  //we only need the user name and the ID, so it makes sense to construct a selector based on that.
  const select = state => state.users
  const users = Object.values(useSelector(select))
  const optionsArray = users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)
  console.log("users:", optionsArray)
  
  const [user, setUser] = useState("")
  const handleSelection = (event) => {
    console.log("event/target/value", event.target.value)
    setUser(event.target.value)
  }
  const handleSubmit = (event) => {
    console.log(user, "submitted!!!")
    event.preventDefault()

  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Pick your favorite flavor:
        <select value={user} onChange={handleSelection}>
          <option>Select an user...</option>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
          {optionsArray}
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default LoginForm