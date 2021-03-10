

import Amazon from '../img/amazon-project-min.jpg';
import Netflix from '../img/netflix-project.jpg';
import GitHub from '../img/github-project.jpg';
import MealFinder from '../img/meal-finder-project.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';




const Projects = () => {
    //Amazon Clone
    const popupboxAmazon = () => {
        const content = (
            <>
                <img src={Amazon} alt='Amazon Clone project'/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis convallis convallis tellus id. Dolor sit amet consectetur adipiscing elit.</p>
                <b>GitHub:</b><a href='https://github.com/BlakeACollins/amazon-clone' className='hyper__link' onClick={() => window.open("https://github.com/BlakeACollins/amazon-clone")}>Amazon Clone</a>
            </>
        )
        
        PopupboxManager.open({ content });
           
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
                        <div className='project__image__box' onClick={popupboxAmazon}>
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
            <PopupboxContainer {...popupboxConfigAmazon} />
            <div className='container mt-3'>
                    <div className='image__box__wrapper row justify-content-center'>
                        <div className='project__image__box' onClick={popupboxAmazon}>
                            <h5 className='text-center mb-3'>Regular Joe Coffee</h5>
                            <img className='project__image' src={Amazon} alt=''/>
                            <div className='overflow'></div>
                            <FontAwesomeIcon className='project__icon' icon={faSearchPlus} />
                        </div>
                    {/* - */}
                        <div className='project__image__box'>
                            <h5 className='text-center mb-3'>Gmail Clone</h5>
                            <img className='project__image' src={Netflix} alt=''/>
                            <div className='overflow'></div>
                            <FontAwesomeIcon className='project__icon' icon={faSearchPlus} />
                        </div>
                    {/* - */}
                        <div className='project__image__box'>
                            <h5 className='text-center mb-3'>Web Shop</h5>
                            <img className='project__image' src={GitHub} alt=''/>
                            <div className='overflow'></div>
                            <FontAwesomeIcon className='project__icon' icon={faSearchPlus} />
                        </div>
                    {/* - */}
                        <div className='project__image__box'>
                            <h5 className='text-center mb-3'>Instagram Clone</h5>
                            <img className='project__image' src={MealFinder} alt=''/>
                            <div className='overflow'></div>
                            <FontAwesomeIcon className='project__icon' icon={faSearchPlus} />
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
