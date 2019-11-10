import React from 'react';
import Home from './Components/Home';
import Rooms from './Components/Rooms';
import SingleRoom from './Components/SingleRoom';
import Error from './Components/Error';
import { Route, Switch } from 'react-router-dom'
import './App.css';


function App() {
  return (
    <>
      <Route exact path="/"            component={Home} />
      <Route exact path="/rooms"       component={Rooms} />
      <Route exact path="/rooms/:slug" component={SingleRoom} />
  

      
    </>

  );
}

export default App;
