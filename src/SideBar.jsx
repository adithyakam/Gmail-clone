import React from 'react'

import {Button} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';



import './SideBar.css'

function SideBar() {
    return (
        <div className='sidebar'>
            <Button startIcon={<AddIcon fontSize='Large' />  } className='sidebar__compose'>Compose</Button>
        </div>
    )
}

export default SideBar
