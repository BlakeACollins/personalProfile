import React from 'react'
import emailjs from 'emailjs-com'

function Contact() {
    const serviceID = 'service_ID'
    const templateID = 'template_ID'
    const userID = 'user_m7yz9DxmhkHoEWfowVyF1'

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(serviceID, templateID, e.target, userID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }

    return (
        <div className='contact'>
            <h1 className='py-4 text-center'>Contact Me</h1>
                <p className='text-center pb-4'>Feel free to reach out anytime and I'll see how I can help!</p>
            <div className='container'>
                <form onSubmit={sendEmail}>
                <div className='row'>
                    <div className='col-md-6 col-xs-12'>
                        {/*Name Input */}
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Name'
                                name='name'
                                />
                                {/*Email Input */}
                                <input
                                type='email'
                                className='form-control'
                                placeholder='Email'
                                name='email'
                                />
                                {/*Phone Input */}
                                <input
                                type='tel'
                                className='form-control'
                                placeholder='Phone'
                                name='phone'
                                />
                                {/*Subject Input */}
                                <input
                                type='text'
                                className='form-control'
                                placeholder='Subject'
                                name='subject'
                            />
                    </div>
                        <div className='col-md-6 col-xs-12'>
                            {/*Description Input */}
                            <textarea
                            className='form-control'
                            placeholder='Let me know how I can help!'
                            name='description'
                            >
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