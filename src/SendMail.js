 import React from 'react'

 import {useForm} from 'react-hook-form';

import CloseIcon from '@material-ui/icons/Close';
import {Button} from '@material-ui/core'

import  './SendMail.css'


function SendMail() {
    const {register,handleSubmit,watch,errors} =useForm();

    const onSubmit=(formdata)=>{
        
    }


    return (
        <div  className='sendmail' >
            <div className='sendMail__header'>
                <h3>message</h3>
                <CloseIcon className='sendMail__close'/>

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
