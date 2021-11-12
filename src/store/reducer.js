import {combineReducers} from 'redux'

import authReducer from '../features/auth/auth'
import usersReducer from '../features/users/users'
import questionsReducer from '../features/questions/questions'
import formReducer from '../features/form/form'

const rootReducer = combineReducers({
    auth: authReducer,
    users: usersReducer,
    questions: questionsReducer,
    form: formReducer
})

export default rootReducer