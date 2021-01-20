import React from 'react';
import Header from './Header'
import SideBar from './SideBar'
import EmailList from './EmailList';
import Mail from './Mail'

import {  BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom' 

import './App.css';



function App() {
  return (
    <Router>
      <div className="App">
      <Header/>

      <div className='app__body'>
      <SideBar/>
      <Route path='/mail'>
        <Mail/>
      </Route>
      <Route path='/'>
        <EmailList/>
      </Route>
      </div>
      </div>
    </Router>
  );
}

export default App;
