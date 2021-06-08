import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/store'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
console.log('store:',store.getState())
store.dispatch({type: 'apiCallBegan', payload:{
  feature: 'users',
  method: 'get',
  data: {},
  onSuccess: 'users/usersReceived',
  onError: 'apiRequestfailed'
}})
console.log('store:',store.getState())

// db._getUsers().then(data => console.log(data))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
