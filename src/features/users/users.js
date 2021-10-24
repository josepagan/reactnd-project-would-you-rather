/* eslint-disable no-unused-vars */


//Action types

import produce from "immer"
import { createSelector } from 'reselect'


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
    // console.log('action:', action)
    switch (action.type){
        case 'users/usersReceived':{
            return action.payload
        }
        case 'users/questionAdded':{
            const {author, id} = action.payload
            return produce(state, (newState => {
                newState[author].questions.push(id)
            }))
        }
        case 'users/questionAnswered':{
           const {authedUser, qid, answer} = action.payload

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


const usersSelector = state => state.users
export const leaderboardArray = createSelector([usersSelector],
    (users)=> {
        const usersArray = Object.values(users)
        const sortedByScore = usersArray.sort((a,b)=>{
            const userScore = (user) => Object.keys(user.answers).length + user.questions.length
            return userScore(b) - userScore(a)
        })

        const sortedByScoreIds = sortedByScore.map(user => user.id)
        return sortedByScoreIds

        // const testMap = usersArray.map(el=> Object.keys(el.answers).length)
        // return testMap

    })
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