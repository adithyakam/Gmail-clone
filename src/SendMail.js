 import React from 'react'

 import {useForm} from 'react-hook-form';

import CloseIcon from '@material-ui/icons/Close';
import {Button} from '@material-ui/core'

import {useDispatch} from 'react-redux'

import  './SendMail.css'
import { closeSendMessage } from './features/mailSlice';
import { db } from './firebase';

import firebase from 'firebase';


function SendMail() {
    const  dispatch = useDispatch();

    const {register,handleSubmit,watch,errors} =useForm();

    const onSubmit=(formdata)=>{
        db.collection('emails').add(
            {
                to:formdata.to,
                subject:formdata.subject,
                message:formdata.message,
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            }
        )
       dispatch(closeSendMessage()); 
    }


    return (
        <div  className='sendmail' >
            <div className='sendMail__header'>
                <h3>message</h3>
                <CloseIcon onClick={()=>dispatch(closeSendMessage())} className='sendMail__close'/>

            </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input   ref={register({required:true})} name='to' placeholder='TO' type='text'/>
                    {errors.to && <p className='sendmail_error'> To is required</p>}
                    <input   ref={register({required:true})} name='subject' placeholder='subject'  type='text'/>
                    {errors.subject && <p className='sendmail_error'> subject is required</p>}
                    <input  ref={register({required:true})} name='message' className='sendmail__message' placeholder='message..'  type='text'/>
                    {errors.message && <p className='sendmail_error'> message is required</p>}

                    <div className='sendMail__options'>
                        <Button className="sendMail__send"
                        variant='contained'
                        color='primary'
                        type='submit'
                        >
                            Send
                        </Button>
                    </div>
                </form>
        </div> 

    )
}

export default SendMail
