import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilRuler, faCode, faMobileAlt, faLaptopCode, faPlus } from '@fortawesome/free-solid-svg-icons'
import { faSellsy } from '@fortawesome/free-brands-svg-icons'

const Services = () => {
    return (
    <div className='services'>
        <div className='py-5'>
        <h1 className='text-center pt-5 pb-5'>My Services</h1>
            
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
                                    <h3 className='pt-2 pb-2'>JavaScript Full Stack Development</h3>
                                            <p className='lead'>Technologies Used:</p>
                                                <p>HTML, CSS, Bootstrap, JavaScript, jQuery, JSON, React, React Hooks, Context API, Redux, GraphQL, Gatsby, Sanity, and Firebase</p>
                                                    <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <hr className='break' />
                            </div>
                            {/* - */}
                        <div className='col-md-4 col-sm-6'>
                            <FontAwesomeIcon icon={faSellsy} size='2x' className='icon__color'/>
                                    <h3 className='pt-2 pb-2'>Ecommerce Website Development</h3>
                                            <p className='lead'>Technologies Used:</p>
                                                <p>HTML, CSS, Bootstrap, React, Next, Stripe, Shopify, and Firebase</p>
                                                    <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <hr className='break' />
                        </div>
                    </div>
                    {/**ROW 2 */}
                    <div className='row__two row'>
                    <div className='col-md-4 col-sm-6'>
                            <FontAwesomeIcon icon={faMobileAlt} size='2x' className='icon__color'/>
                                    <h3 className='pt-2 pb-2'>Mobile Web Specalist</h3>
                                            <p className='lead'>Technologies Used:</p>
                                                <p>HTML, CSS, Sass, Bootstrap, JavaScript, React, and Webflow</p>
                                                    <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <hr className='break' />
                    </div>
                    {/* - */}
                        <div className='col-md-4 col-sm-6'>
                            <FontAwesomeIcon icon={faLaptopCode} size='2x' className='icon__color'/>
                                <h3 className='pt-2 pb-2'>Website Builders</h3>
                                    <p className='lead'>Technologies Used:</p>
                                        <p>WordPress, Webflow, Wix, and Kajabi</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <hr className='break' />
                      </div>
                        {/* - */}
                        <div className='col-md-4 col-sm-6'>
                            <FontAwesomeIcon icon={faPlus} size='2x' className='icon__color'/>
                                <h3 className='pt-2 pb-2'>SEO Improvements</h3>
                                    <p className='lead'>Technical aspects of your website:</p>
                                        <p>Accessibility testing, Image optimization, SSL certificates, Mobile optimization, File compression, and Typography</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
