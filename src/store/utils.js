import store from "./store";
import { apiCallBegan } from "./api";

export function init() {
  store.dispatch(apiCallBegan({
    callMethodName: '_getUsers',
    data: {},
    onSuccess: 'users/usersReceived',
    onError: 'apiRequestfailed'
  }
  ))
  store.dispatch(apiCallBegan({
    callMethodName: '_getQuestions',
    data: {},
    onSuccess: 'questions/questionsReceived',
    onError: 'apiRequestfailed'

  }
  ))

  store.dispatch({
    type: 'auth/authedUser',
    payload: "helenfoening"
  })

  //TODO add also here a dispatch to the default auth user
}