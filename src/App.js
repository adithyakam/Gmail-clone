import React from 'react';
import Header from './Header'
import SideBar from './SideBar'
import EmailList from './EmailList';
import Mail from './Mail'

import {  BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom' 

import './App.css';
import SendMail from './SendMail';



function App() {
  return (
    <Router>
      <div className="App">
      <Header/>

      <div className='app__body'>
      <SideBar/>
      <switch>
      <Route exact path='/mail'>
        <Mail/>
      </Route>
      <Route exact path='/'>
        <EmailList/>
      </Route>
      </switch>
      </div>
      <SendMail/>
      </div>
    </Router>
  );
}

export default App;
