/* eslint-disable no-unused-vars */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/store'
import { Provider } from 'react-redux';
import * as actions from './store/api'
import { BrowserRouter as Router } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
// console.log('store:', store.getState())

// store.dispatch(actions.apiCallBegan({
//       feature: 'users',
//       method: 'get',
//       data: {},
//       onSuccess: 'users/usersReceived',
//       onError: 'apiRequestfailed'
//     }
// ))



// store.dispatch(actions.apiCallBegan({
//   callMethodName: '_getUsers',
//   data: {},
//   onSuccess: 'users/usersReceived',
//   onError: 'apiRequestfailed'
// }
// ))
// // change this asap
// store.dispatch(actions.apiCallBegan({
//   callMethodName: '_getQuestions',
//   data: {},
//   onSuccess: 'questions/questionsReceived',
//   onError: 'apiRequestfailed'

// }
// ))




// store.dispatch({
//   type: 'apiCallBegan', payload: {
//     feature: 'users',
//     method: 'get',
//     data: {},
//     onSuccess: 'users/usersReceived',
//     onError: 'apiRequestfailed'
//   }
// })



// store.dispatch({
//   type: 'apiCallBegan', payload: {
//     feature: 'questions',
//     method: 'get',
//     data: {},
// onSuccess: 'questions/questionsReceived',
// onError: 'apiRequestfailed'
//   }
// })

// store.dispatch({
//   type: 'apiCallBegan', payload: {
//     feature: 'questions',
//     method: 'post',
//     data: {
//       question:{
//         optionOneText:"ying" ,
//         optionTwoText: "yang",
//         author: "helenfoneing"
//       }
//     },
//     onSuccess: 'questions/questionAdded',
//     onError: 'apiRequestfailed'
//   }
// })

// store.dispatch({
//   type: 'apiCallBegan', payload: {
//     feature: 'answer',
//     method: 'post',
//     data: {
//       answer:{
//         authedUser: 'helenfoneing',
//         qid:"am8ehyc8byjqgar0jgpub9",
//         answer: "optionTwo"
//       }
//     },
//     onSuccess: 'users/questionAnswered',
//     onError: 'apiRequestfailed'
//   }
// })
// store.dispatch({
//   type: 'apiCallBegan', payload: {
//     feature: 'answer',
//     method: 'post',
//     data: {
//       answer:{
//         authedUser: 'helenfoneing',
//         qid:"am8ehyc8byjqgar0jgpub9",
//         answer: "optionTwo"
//       }
//     },
//     onSuccess: 'users/questionAnswered',
//     onError: 'apiRequestfailed'
//   }
// })





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
