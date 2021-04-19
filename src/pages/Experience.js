import React from 'react'
import Footer from '../components/Footer'
import '../style/experience.css'

function Experience() {
    return (
        <>
        <div className='experience'>
            <div className='text-uppercase text-center py-4'>
                <h1 className='page__title'>Experience</h1>
            </div>
            <div className='container experience__wrapper'>
                <div className='timeline__block timeline__block__left'>
                        <div className='marker'></div>
                            <div className='timeline__content'>
                                <h3>Web Designer | Web Application Developer, Evergreen Development</h3>
                                <h4>Self Employed</h4>
                                <ul>
                                    <li>Creating wireframes and prototypes with Figma.</li>
                                    <li>Responsive UI design with CSS and Bootstrap</li>
                                    <li>Custom CSS styling written with BEM-IT naming convention.</li>
                                    <li>Checking website score and making SEO improvements.</li>
                                    <li>Creating websites with semantic markup.</li>
                                    <li>Utilize HTML, CSS, React, Stripe.js, and Firebase for E-commerce sites.</li>
                                </ul>
                            </div>
                    </div>
                {/* - */}
                <div className='timeline__block timeline__block__right'>
                    <div className='marker'></div>
                        <div className='timeline__content'>
                            <h3>Quality Control Inspector, Ventec Life Systems</h3>
                            <h4>08/24/2020 to 12/16/2020</h4>
                            <ul>
                                <li>Receiving inspection and documentaion of hardware.</li>
                                <li>Providing support to the assembly line and supply chain management.</li>
                                <li>Final inspection of ventilators and generating final reports for customers.</li>
                                <li>Creating First Article Inspection documentaion.</li>
                                <li>Updating Engineering inspection drawings after revision changes.</li>
                                <li>Identify, segregate, and maintain records for non-conforming material.</li>
                                <li>Testing new quality inspection software.</li>
                            </ul>
                        </div>
                </div>
                {/* - */}
                <div className='timeline__block timeline__block__left'>
                    <div className='marker'></div>
                        <div className='timeline__content'>
                            <h3>Jr. Systems Engineer, Universal Mac</h3>
                            <h4>03/02/2020 to 08/24/2020</h4>
                            <ul>
                                <li>Provide IT support and management to 50-200 computers.</li>
                                <li>Traveling on-site to clients to deploy new technologies.</li>
                                <li>Install client software, troubleshoot issues, research, and design new solutions.</li>
                                <li>Help automate client system tracking, monitoring, and rollouts.</li>
                                <li>Track, resolve, and document trouble tickets.</li>
                                <li>On-site and remote ongoing support of existing IT infrastructure.</li>
                            </ul>
                        </div>
                </div>
                {/* - */}
                <div className='timeline__block timeline__block__right'>
                    <div className='marker'></div>
                        <div className='timeline__content'>
                            <h3>Quality Control Inspector, King Machine</h3>
                            <h4>04/08/2019 to 02/20/2020</h4>
                            <ul>
                                <li>Perform in process and final inspection of light assemblies and detail parts per ISO9001 requirements.</li>
                                <li>Receiving and inspecting hardware.</li>
                                <li>Part mark inspection.</li>
                                <li>Final quality validation prior to inventory.</li>
                                <li>Identify, segregate, and maintain records for non-conforming material.</li>
                                <li>Preform First Article Inspection</li>
                                <li>Familiarity with Geometric Dimensions and Tolerances</li>
                                <li>Proficient with Microsoft Office products.</li>
                            </ul>
                        </div>
                </div>
                {/* - */}
                <div className='timeline__block timeline__block__left'>
                    <div className='marker'></div>
                        <div className='timeline__content'>
                            <h3>Assembly Technician 2, Accra Manufacturing</h3>
                            <h4>12/23/2015 to 04/05/2019</h4>
                            <ul>
                                <li>Worked directly with QA personnel to identify and correct defects.</li> 
                                <li>Inspected all work for quality and compliance with design standards.</li>
                                <li>Fabricated large and small parts per drawing and assembled parts as required.</li>
                                <li>Planned, scheduled and delegated daily work.</li>
                                <li>Familiarity with computer-based MRP data entry.</li>
                                <li>Experience with Business Quality Management Systems.</li>
                                <li>Lean Manufacturing and 6S experience.</li>
                            </ul>
                        </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Experience
