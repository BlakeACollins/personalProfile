import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilRuler, faCode, faMobileAlt } from '@fortawesome/free-solid-svg-icons'

import '../style/services.css'

const Services = () => {
    return( 
    <div className='services'>
        <div className='py-5'>
        <h1 className='text-uppercase text-center py-4 pt-2'>services</h1>
            
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4 col-sm-6'>
                                <FontAwesomeIcon icon={faPencilRuler} size='2x' className='icon__color'/>
                                    <h3 className='pt-2 pb-2'>Web Design</h3>
                                                    <p className='mb-4'>I can help with the first steps of creating your website with a wireframe or mock-up design. I can make a low-fidelity or high-fidelity mock-up that is professional and responsive</p>
                            <hr className='break' />
                            </div>
                        
                        {/* - */}
                        <div className='col-md-4 col-sm-6'>
                            <FontAwesomeIcon icon={faCode}C size='2x' className='icon__color mt-2'/>
                                    <h3 className='pt-2 pb-2'>Front End Development</h3>
                                                    <p className='mb-4'>I will bring your website to life with the latest technologies! I can make a simple landing page, static or dynamic site, blog, or e-commerce site. I focus on mobile responsiveness, security, SEO, and accessibility.</p>
                            <hr className='break' />
                            </div>
                            <div className='col-md-4 col-sm-6'>
                            <FontAwesomeIcon icon={faMobileAlt} size='2x' className='icon__color'/>
                                    <h3 className='pt-2 pb-2'>Mobile Web Specialist</h3>
                                                    <p className='mb-4'>Having a responsive web site is essentail! Half of all web traffic is from a mobile device! Having a responsive site can also affect your Google ranking! I can make sure your site is ready for the mobile world!</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Services
