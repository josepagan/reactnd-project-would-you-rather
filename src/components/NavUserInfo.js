import React from "react"
import { useSelector, useDispatch } from "react-redux"
const NavUserInfo = () => {
    const select = state => {
        return state.users[state.auth]
    }
    const authedUser = useSelector(select)
    const dispatch = useDispatch()


    return authedUser ?
        <div className="user-name">
            <div>Signed in as: {authedUser && authedUser.name}</div>
            <button onClick={() => { dispatch({ type: 'auth/logoutClicked' }) }}>Logout</button>
        </div>
        :
        <div>Not Logged in at all wtf mate</div>

}

export default NavUserInfo