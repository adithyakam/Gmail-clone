import React from 'react'

import {IconButton,Checkbox} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete';
import EmailIcon from '@material-ui/icons/Email';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import PrintIcon from '@material-ui/icons/Print';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';


import {useHistory} from 'react-router-dom';

import './Mail.css'

function Mail() {
const history =useHistory();

    return (
        <div className='mail'>
            <div className='mail__tools'>
            <div className='mail__toolsleft'>
            <IconButton onClick={()=>history.push('/')}>
            <ArrowBackIcon />
            </IconButton>
            <IconButton>
            <MoveToInboxIcon/>
            </IconButton>
            <IconButton>
            <ErrorIcon/>
            </IconButton>
            <IconButton>
            <DeleteIcon/>
            </IconButton>
            <IconButton>
            <EmailIcon/>
            </IconButton>
             <IconButton>
            <WatchLaterIcon/>
            </IconButton>
            <IconButton>
            <CheckCircleIcon/>
            </IconButton>
            <IconButton>
            <MoreVertIcon/>
            </IconButton>
            </div>
            <div className='mail__toolsRigth'>
            <IconButton>
            <UnfoldMoreIcon/>
            </IconButton>
            <IconButton>
            <PrintIcon/>
            </IconButton>
            <IconButton>
            <ExitToAppIcon/>
            </IconButton>  
            </div>
            </div>
            <div className='main__body'>
            <div className='mail__bodyHeader'>
                <h2>Test-sb</h2>
                <LabelImportantIcon className='mail__imp'/>
                <p>title</p>
                <p className='mail__time'>10</p>
            </div>
            <div className='mail__message'>
            <p>thisi is amsg</p>
            </div>
            </div>
        </div>
    )
}

export default Mail
