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

  store.dispatch(apiCallBegan({
    callMethodName: '_saveQuestion',
    data: { optionOneText: "I believe in fate", optionTwoText: "I donte believe in fate", author:'helenfoneing' },
    //onSuccess has to be an array with all the actions required , in this case I have to also 
    // call users/questionsAdded
    onSuccess: 'questions/questionAdded',
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

    store.dispatch(apiCallBegan({
    callMethodName: '_getUsers',
    data: {},
    onSuccess: 'users/usersReceived',
    onError: 'apiRequestfailed'
  }
  ))


}