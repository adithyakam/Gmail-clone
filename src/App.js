import React from 'react';
import Header from './Header'
import SideBar from './SideBar'
import EmailList from './EmailList';
import Mail from './Mail'
import {useSelector} from 'react-redux';
import {selectopenSendMessage} from './features/mailSlice'

import {  BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom' 

import './App.css';
import SendMail from './SendMail';



function App() {

    const openSendMessage =useSelector(selectopenSendMessage)

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
      {openSendMessage && <SendMail/>}
      </div>
    </Router>
  );
}

export default App;
 