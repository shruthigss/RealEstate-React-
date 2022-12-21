import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import './App.css';
import Signin from './components/Signin'
import Signup from './components/Signup'
import Home from './components/Home';
import Addproperty from './components/Addproperty';

function App() {
  return (
    <div >
      <BrowserRouter>
          
              <Route exact path='/'>
                <Signin/>
              </Route>
          <Switch>
              <Route path='/signup'>
                <Signup/>
              </Route>
              <Route path='/home'>
                <Home/>
              </Route>
              <Route path='/addproperty'>
                <Addproperty/>
              </Route>
          </Switch>
          </BrowserRouter>
        </div>
  );
}

export default App;
