/* eslint-disable no-unused-vars */

//Action Types
const AUTHED_USER="authedUser";

//Action creators


//reducer
export default function reducer(state="",action){
    switch (action.type) {
        case 'auth/authedUser':{
            return action.payload
        }
        case 'auth/logoutClicked':{
            return ""
        }
    }
    return state
}