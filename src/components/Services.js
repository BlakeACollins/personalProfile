import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilRuler, faCode, faMobileAlt } from '@fortawesome/free-solid-svg-icons'

import '../style/services.css'

const Services = () => {
    return( 
        <>
    <div className='services'>
        <div className='py-5'>
        <h1 className='text-uppercase text-center py-4'>services</h1>
            
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4 col-sm-6'>
                                <FontAwesomeIcon icon={faPencilRuler} size='2x' className='icon__color'/>
                                    <h3 className='pt-2 pb-2'>Web Design</h3>
                                            <p className='lead'>Technologies Used:</p>
                                                <p>Balsamiq and Figma</p>
                                                    <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <hr className='break' />
                            </div>
                        
                        {/* - */}
                        <div className='col-md-4 col-sm-6'>
                            <FontAwesomeIcon icon={faCode}C size='2x' className='icon__color mt-2'/>
                                    <h3 className='pt-2 pb-2'>UI and Front End Development</h3>
                                            <p className='lead'>Technologies Used:</p>
                                                <p>HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, React, Redux, Gatsby, Next, Stripe.js, Shopify, Webflow, Firebase, and SEO improvements</p>
                                                    <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <hr className='break' />
                            </div>
                            <div className='col-md-4 col-sm-6'>
                            <FontAwesomeIcon icon={faMobileAlt} size='2x' className='icon__color'/>
                                    <h3 className='pt-2 pb-2'>Mobile Web Specalist</h3>
                                            <p className='lead'>Technologies Used:</p>
                                                <p>HTML, CSS, Sass, Bootstrap, Tailwind CSS, JavaScript, React, and Webflow</p>
                                                    <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <hr className='break' />
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Services
