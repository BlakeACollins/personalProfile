import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { useForm } from "react-hook-form"

const Contact = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, errors } = useForm();
  
    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_RXtQk9xbkcuxeI8Wr9FD4";
  
    const onSubmit = (data, r) => {
      send(
        serviceID,
        templateID,
        {
          name: data.name,
          phone: data.phone,
          email: data.email,
          subject: data.subject,
          description: data.description
        },
        userID
      )
      r.target.reset();
    }
  
    const send = (serviceID, templateID, variables, userID) => {
      emailjs.send(serviceID, templateID, variables, userID)
        .then(() => {
          setSuccessMessage("Form sent successfully! I'll contact you as soon as possible. Thank you!");
        }).catch(err => console.error(`Something went wrong ${err}`));
    }
    return (
        <div className='contact'>
            <h1 className='py-4 text-center'>Contact Me</h1>
                <p className='text-center pb-4'>Feel free to reach out anytime and I'll see how I can help!</p>
            <div className='container'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='row'>
                    <div className='col-md-6 col-xs-12'>
                        {/*Name Input */}
                            <input type='text'className='form-control'placeholder='Name'name='name'
                            ref={register({
                                required: "Please enter a name."
                            })}/>
                        {/*Email Input */}
                            <input type='email' className='form-control'placeholder='Email'name='email'
                            ref={register({
                                required:"Please enter your email."
                            })}/>
                        {/*Phone Input */}
                            <input type='tel'className='form-control'placeholder='Phone'name='phone'/>
                        {/*Subject Input */}
                            <input type='text'className='form-control'placeholder='Subject'name='subject'/>
                    </div>
                    <span>{errors}</span>
                    <div className='col-md-6 col-xs-12'>
                        {/*Description Input */}
                            <textarea className='form-control'placeholder='Let me know how I can help!'name='description'>
                            </textarea>
                            <button className='contact__btn' type='submit'>Send</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact