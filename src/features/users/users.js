//Action types

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
       }

    return state
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