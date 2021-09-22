// import { QuestionAnswer } from '@material-ui/icons';
/* eslint-disable no-unused-vars */


// import produce from 'immer';
//Action types

import produce from "immer"

//const BUG_ADDED="bugAdded"



//Actions creators

//export const bugAdded = description => {
// type: BUG_ADDED,
// payload: {
//    description
//}
//}

//reducer
export default function reducer(state={} ,action){
    console.log('action:', action)
    switch (action.type){
        case 'users/usersReceived':{
            return action.payload
        }
        case 'users/questionAdded':{
            const {authedUser, id} = action.payload
            return produce(state, (newState => {
                newState[authedUser].questions.push(id)
            }))
        }
        case 'users/questionAnswered':{
           const {authedUser, qid, answer} = action.payload
           console.log('response action', action.payload)

            //I think this does not work because somehow it updates before than anythng else.
            //iit says... Type error, new state is undefined

            return produce(state, (newState=>{
                newState[authedUser].answers[qid]=answer
            }))

            //TODO maybe here i have to dispatch to quiestons to add the voted users to the list???

        }
        default:
            return state
       }

}

//export default function reducer(state={}, action)
//switch(action.type) {
// case BUG_ADDED:
// return //keep going   
// }

//TODO create a fetch users based on this code...
// Thunk function
// export async function fetchTodos(dispatch, getState) {
//     const response = await client.get('/fakeApi/todos')
//     dispatch({ type: 'todos/todosLoaded', payload: response.todos })
//   }