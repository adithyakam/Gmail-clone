import React, { useEffect } from 'react';
import Header from './Header'
import SideBar from './SideBar'
import EmailList from './EmailList';
import Mail from './Mail'
import {useDispatch, useSelector} from 'react-redux';
import {selectopenSendMessage} from './features/mailSlice'

import {  BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom' 

import './App.css';
import SendMail from './SendMail';
import { login, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';



function App() {

    const opnSendMessage =useSelector(selectopenSendMessage)
    const user =useSelector(selectUser)
    const dispatch=useDispatch();

    useEffect(() => {
    auth.onAuthStateChanged(user=>{
      if(user){
        dispatch(login({
          displayName:user.displayName,
           email:user.email,
           photoUrl:user.photoURL
        }))
      }else{
        
      }
    })
    }, [])

  return (
    <Router>
    {
      !user?(
        <Login/>

     ):(
        <div className="App">
      <Header/>

      <div className='app__body'>
      <SideBar/>
      <Switch>
      <Route exact path='/mail'>
        <Mail/>  
      </Route>
      <Route exact path='/'>
        <EmailList/>
      </Route>
      </Switch>
      </div>
      {opnSendMessage && <SendMail/>}
      </div>
      
    )}

     
    </Router>
  );
}

export default App;
 