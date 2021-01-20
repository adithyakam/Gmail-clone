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
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import { IconButton} from '@material-ui/core';



import './SideBar.css'

function SideBar() {
    return (
        <div className='sidebar'>
            <Button startIcon={<AddIcon fontSize='Large' />  } className='sidebar__compose'>Compose</Button>
            <SideBarOption Icon={InboxIcon} title='inbox'  number={54}  selected={true}/>
            <SideBarOption Icon={StarIcon} title='starred'  number={54}/>
            <SideBarOption Icon={LabelImportantIcon} title='important'  number={54}/>
            <SideBarOption Icon={NearMeIcon} title='save'  number={54}/>
            <SideBarOption Icon={NoteIcon} title='draft'  number={54}/>
            <SideBarOption Icon={ExpandMoreIcon} title='more'  number={54}/>

            <div className='sidebar__footer'>
                <div className='sidebar__footerIcons'>
                    <IconButton>
                        <PersonIcon/>
                    </IconButton>
                    <IconButton>
                        <DuoIcon/>
                    </IconButton>
                    <IconButton>
                        <PhoneIcon/>
                    </IconButton>
                </div>
            </div>

        </div>
    )
}

export default SideBar
