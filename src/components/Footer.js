import React from 'react'
import Logo from '../img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt, faLinkedinIn,faFacebookF } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3 col-sm-6'>
                        <div>
                            <img src={Logo} alt='Compnay Logo'></img>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                    <figure>
                            <blockquote>
                                <h5 className=''>Your website should be a marketing asset, not an engineering nightmare.</h5>
                            </blockquote>
                        </figure>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <div>
                            <p>Blake Collins</p>
                        </div>
                        <div>
                            <p>Seattle, WA</p>
                        </div>
                        <div>
                            <p>evergreenDev@gmail.com</p>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <a className='p-3' href='https://github.com/BlakeACollins'>
                        <FontAwesomeIcon icon={faGithubAlt} style={{ color: 'black'}} />
                        </a>
                        <a className='p-3' href='https://www.linkedin.com/in/blake-collins-084668140/'>
                        <FontAwesomeIcon icon={faLinkedinIn} style={{ color: 'black'}} />
                        </a>
                        <a className='p-3' href='https://www.facebook.com/blake.collins.3958'>
                        <FontAwesomeIcon icon={faFacebookF} style={{ color: 'black'}} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
