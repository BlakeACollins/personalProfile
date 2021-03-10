import React from 'react'

function Contact() {
    return (
        <div className='contact'>
            <h1 className='py-5 text-center'>Contact Me</h1>
                <p className='text-center'>Please contact me if you would like to hire me or see what projects I've been working on.</p>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 col-xs-12'>
                        {/*Name Input */}
                        <input
                        className='form-control'
                        placeholder='Name'
                        name='name'
                        />
                        {/*Email Input */}
                        <input
                        className='form-control'
                        placeholder='Email'
                        email='email'
                        />
                        {/*Subject Input */}
                        <input
                        className='form-control'
                        placeholder='Subject'
                        subject='subject'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact