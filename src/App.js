/* eslint-disable no-unused-vars */

import React from 'react';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux'

//  import './App.css';

const selectShit = state => state

//TODO use react reduct to dispatch anything using the button just created, 

function App() {
  const shit = useSelector(selectShit)
  const dispatch = useDispatch();
  console.log("store from App component", shit)
  return (
    <>
      <Container >
        <h1>OMG</h1>
        <Button variant="primary"
                onClick={()=>{dispatch({
                  type: 'apiCallBegan', payload: {
                    feature: 'users',
                    method: 'get',
                    data: {},
                    onSuccess: 'users/usersReceived',
                    onError: 'apiRequestfailed'
                  }
                })}}>Primary</Button>{' asdf'}
      </Container>
    </>
  );
}

export default App;