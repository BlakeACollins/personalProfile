import React from 'react';
import Amazon from '../img/amazon-project-min.jpg';
import Netflix from '../img/netflix-project.jpg';
import GitHub from '../img/github-project.jpg';
import MealFinder from '../img/meal-finder-project.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { Popup, popupboxContainer } from 'reactjs-popup';


function Projects() {
    //Amazon Clone
    const openPopupboxAmazon = () => {
        
        const content = (
            <>
            <img src={Amazon} alt='Amazon Clone project'/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis convallis convallis tellus id. Dolor sit amet consectetur adipiscing elit.</p>
            <b>GitHub:</b><a className='hyper__link' onClick={() => window.open("https://github.com/BlakeACollins/amazon-clone")}></a>
            </>
        )
        
        Popup.open({ content })
    }

    const popupboxConfigAmazon = {
        titleBar: {
            enable: true,
            text: "Amazon clone project."
          },
          fadeIn: true,
          fadeInSpeed: 500
    }


    return (
        <div className='project__wrapper'>
            <div className='container'>
                <h1 className='text-uppercase text-center py-5' >projects</h1>
                    <div className='image__box__wrapper row justify-content-center'>
                        <div className='project__image__box' onClick={openPopupboxAmazon}>
                            <h5 className='text-center mb-3'>Amazon Clone</h5>
                            <img className='project__image' src={Amazon} alt=''/>
                            <div className='overflow'></div>
                            <FontAwesomeIcon className='project__icon' icon={faSearchPlus} />
                        </div>
                    {/* - */}
                        <div className='project__image__box'>
                            <h5 className='text-center mb-3'>Netflix Clone</h5>
                            <img className='project__image' src={Netflix} alt=''/>
                            <div className='overflow'></div>
                            <FontAwesomeIcon className='project__icon' icon={faSearchPlus} />
                        </div>
                    {/* - */}
                        <div className='project__image__box'>
                            <h5 className='text-center mb-3'>GitHub Profile Finder</h5>
                            <img className='project__image' src={GitHub} alt=''/>
                            <div className='overflow'></div>
                            <FontAwesomeIcon className='project__icon' icon={faSearchPlus} />
                        </div>
                    {/* - */}
                        <div className='project__image__box'>
                            <h5 className='text-center mb-3'>Meal Finder</h5>
                            <img className='project__image' src={MealFinder} alt=''/>
                            <div className='overflow'></div>
                            <FontAwesomeIcon className='project__icon' icon={faSearchPlus} />
                        </div>
                </div>
            </div>
            <popupboxContainer {...popupboxConfigAmazon} />
        </div>
    )
}

export default Projects;
