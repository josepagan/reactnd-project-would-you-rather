/* eslint-disable no-unused-vars */
import produce from 'immer'
//Action Types
// const AUTHED_USER="authedUser";

//Action creators


//reducer
export default function reducer(state={},action){
    switch (action.type){
        case 'questions/questionsReceived':{
            return action.payload
        }
        case 'questions/questionAdded':{
            return produce(state, (newState)=>{
                newState[action.payload.id] = action.payload
            })
        }
    }
    return state
}