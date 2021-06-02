import {combineReducers} from 'redux'

import authReducer from '../features/auth/auth'
import usersReducer from '../features/users/users'
import questionsReducer from '../features/questions/questions'

const rootReducer = combineReducers({
    auth: authReducer,
    users: usersReducer,
    questions: questionsReducer
})

export default rootReducer