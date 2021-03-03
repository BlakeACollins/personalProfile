import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilRuler, faCode, faMobileAlt } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
    return (
        <div className='services'>
            <h1 className='text-center'>Services</h1>
            <div className='py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3 col-sm-6'>
                            <div className='box'>
                                <FontAwesomeIcon icon={faPencilRuler} size='2x'/>
                                    <h3>Web Desisgn</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className='col-md-3 col-sm-6'>
                            <div className='box'>
                            <FontAwesomeIcon icon={faCode}C size='2x'/>
                                    <h3>Web Devlopment</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                            </div>
                            {/* - */}
                            <div className='col-md-3 col-sm-6'>
                            <div className='box'>
                                <FontAwesomeIcon icon={faMobileAlt} size='2x'/>
                                    <h3>Mobile App Development</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
