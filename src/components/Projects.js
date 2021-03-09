import React from 'react'
import Amazon from '../img/amazon-project-min.jpg'
import Netflix from '../img/netflix-project.jpg'
import GitHub from '../img/github-project.jpg'

function Projects() {
    return (
        <div className='project__wrapper'>
            <div className='container'>
                <h1 className='text-uppercase text-center py-5' >projects</h1>
                <div className='image__box__wrapper row justify-content-center'>
                    <h2>Amazon Clone</h2>
                    <img className='project__image' src={Amazon} alt=''/>
                </div>
                {/* - */}
                <div className='image__box__wrapper row justify-content-center'>
                    <h2>Netflix Clone</h2>
                    <img className='project__image' src={Netflix} alt=''/>
                </div>
                {/* - */}
                <div className='image__box__wrapper row justify-content-center'>
                    <h2>GitHub Profile Finder</h2>
                    <img className='project__image' src={GitHub} alt=''/>
                </div>
            </div>
        </div>
    )
}

export default Projects
