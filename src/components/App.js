import React from 'react'
// import '../styles/App.css';
import { Wrapper } from '../context/userContext';
import { Settings } from './Setting';
import { Home } from './Home';
const App = () => {

  return (
    <div id="main">
      <Wrapper>
        <Settings />
        <Home />
      </Wrapper>
    </div>
  )
}


export default App;
