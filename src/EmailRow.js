import React from 'react'

import {IconButton,Checkbox} from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';

import {useHistory} from 'react-router-dom';

import './EmailRow.css'
import {selectMail} from './features/mailSlice';
import { useDispatch } from 'react-redux';

function EmailRow({title,subject,desc,time,id}) {
    const dispatch = useDispatch()


    const history=useHistory();
   const openMail=()=>{
      dispatch(selectMail({
          id,
          title,
          subject,
          desc,
          time
      })) 
      history.push('/mail')
   }
  
    return (
        <div className='emailrow' onClick={openMail}>
            <div className='emailrow-options'>
                <Checkbox/>
                <IconButton>
                <StarBorderIcon/>
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon/>
                </IconButton>
            </div>
            <h3 className='emailrow-title'>
                {title}
            </h3>
                
            <div className='emailrow-message'>
                <h4>{subject}{" "}
                <spam className='emailrow_desc'>
                    -{desc}
                </spam>
                </h4>
            </div>
            <p className='emailrow-time'>
            {time}
            </p>

        </div>
    )
}

export default EmailRow
