/* eslint-disable no-unused-vars */

import React from 'react';
import Container from 'react-bootstrap/Container'
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
//  import './App.css';

const selectShit = state => state

//TODO use react reduct to dispatch anything using the button just created, 

function App() {
  const shit = useSelector(selectShit)
  console.log("store from App component", shit)
  return (
    <>
    <Container >
      <h1>OMG</h1>
      <Button variant="primary">Primary</Button>{' asdf'}
    </Container>
    </>
  );
}

export default App;