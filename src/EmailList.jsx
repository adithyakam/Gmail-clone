import React,{useState,useEffect} from 'react'
import EmailRow from './EmailRow'

// import CheckBox from '@material-ui/icons/CheckBox';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {IconButton,Checkbox} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

import './EmailList.css'
import Section from './Section';
import { db } from './firebase';

function EmailList() {

const [emails, setemails] = useState([]);

useEffect(() => {
    db.collection('emails')
    .orderBy('timestamp','desc')
    .onSnapshot(
        snapshot=>{
            setemails(
                snapshot.docs.map(doc =>({
                id:doc.id,
                data:doc.data(),

        })))}
    )
}, [])

    return (
        <div  className='emailist'>
            <div className='emaillist__settings'>
                <div classname='emaillist__settingsLeft'>
                    <Checkbox/>
                    <IconButton>
                    <ArrowDropDownIcon/>
                    </IconButton>
                    <IconButton>
                    <RedoIcon/>
                    </IconButton>
                    <IconButton>
                    <MoreVertIcon/>
                    </IconButton>
                </div>
                <div className='emaillist__settingsRigth'>
                    <IconButton>
                        <ChevronLeftIcon/>
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon/>
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon/>
                    </IconButton>
                    <IconButton>
                        <SettingsIcon/>
                    </IconButton>
                </div>    
           </div>
                 <div className='emaillist__sections'>
                    <Section Icon={InboxIcon} title='primary' color='red' selected={true}/>
                    <Section Icon={PeopleIcon} title='Social' color='#137e80' selected={false}/>
                    <Section Icon={LocalOfferIcon} title='promotion' color='green' selected={false}/>

                </div>
                <div className='emaillist__list'>
                    {
                        emails.map(({id,data:{to,subject,message,timestamp}})=>(
                            <EmailRow
                            

                                id={id}
                                key={id}
                                title={to} 
                                subject={subject}
                                desc={message}
                                time={new Date(timestamp?.seconds*1000).toUTCString()}
                            />
                        ))
                    }

                    <EmailRow
                        title='twich'
                        subject='hey'
                        desc='this is great'
                        time='10am'
                    />
                </div>

        </div>
    )
}

export default EmailList
