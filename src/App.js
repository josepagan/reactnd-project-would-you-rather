/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import { React, useEffect } from 'react';
import { init } from './store/utils';
import MainContainer from './components/layout/MainContainer'
import NavBarMain from './components/layout/NavBarMain';
import './App.css'

function App() {
 
  useEffect(() => {
    init()
  }, [])

  return (
    <>
      <NavBarMain />
      <MainContainer />
    </>
  );
}

export default App;