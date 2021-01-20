import React from 'react'
import SideBarOption from './SideBarOption';



import {Button} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



import './SideBar.css'

function SideBar() {
    return (
        <div className='sidebar'>
            <Button startIcon={<AddIcon fontSize='Large' />  } className='sidebar__compose'>Compose</Button>
            <SideBarOption Icon={InboxIcon} title='inbox'  number={54}  selected={true}/>
            <SideBarOption Icon={StarIcon} title='inbox'  number={54}/>

        </div>
    )
}

export default SideBar
