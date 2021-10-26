import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router"
const NavUserInfo = () => {
    const history = useHistory()
    
    const select = state => {
        return state.users[state.auth]
    }
    const authedUser = useSelector(select)
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch({ type: 'auth/logoutClicked' })
        history.push("/")
    }


    return authedUser ?
        <div className="user-name">
            <div>Signed in as:  {authedUser && authedUser.name}  </div>
            <button onClick={handleClick}>Logout</button>
        </div>
        :
        <div>Not Logged in</div>

}

export default NavUserInfo