import Footer from '../components/Footer';
import Whatsapp from '../img/whatsapp-clone.jpg';
import Hulu from '../img/hulu-clone.jpg';
import Google from '../img/google-clone.jpg'
import GitHub from '../img/github-project.jpg';
import MealFinder from '../img/meal-finder-project.jpg';
import OmniFood from '../img/omni-food.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css'
import MiniProjects from '../components/MiniProjects'
import Contact from '../pages/Contact'
import '../style/projects.css'





const Projects = () => {
    //Whatsapp Clone
    const popupboxWhatsapp = () => {
        const content = (
            <>
                <img className='project__image__popup pb-3' src={Whatsapp} alt='Whatsapp Clone project'/>
                
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis convallis convallis tellus id. Dolor sit amet consectetur adipiscing elit.</p>
                <b>Demo: </b><a href='https://clone-3d506.web.app/' className='hyper__link' onClick={"https://clone-3d506.web.app/"}>Whatsapp Clone</a><br />
                <b>GitHub: </b><a href="https://github.com/BlakeACollins/whatsapp-clone" className='hyper__link' onClick={"https://github.com/BlakeACollins/whatsapp-clone"}>Whatsapp Clone Project</a>
                
            </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "Whatsapp Clone with Next.js",
              },
            },
          });
    }

    const popupboxConfigWhatsapp = {
        titleBar: {
            enable: true,
          },
          fadeIn: true,
          fadeInSpeed: 600
    }
    //Hulu Clone
    const popupboxHuluClone = () => {
        const content = (
            <>
                <img className='project__image__popup pb-3' src={Hulu} alt='Hulu Clone project with next'/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis convallis convallis tellus id. Dolor sit amet consectetur adipiscing elit.</p>
                <b>Demo: </b><a href="https://hulu-ui-clone-eta.vercel.app/" className='hyper__link' onClick={"https://hulu-ui-clone-eta.vercel.app/"}>Hulu Clone</a><br />
                <b>GitHub: </b><a href='https://github.com/BlakeACollins/amazon-clone' className='hyper__link' onClick={"https://github.com/BlakeACollins/amazon-clone"}>Hulu Clone Project</a>
                
            </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "Hulu Clone with Next.js",
              },
            },
          });
    }

    const popupboxConfigHulu = {
        titleBar: {
            enable: true,
          },
          fadeIn: true,
          fadeInSpeed: 600
    }
    //GitHub Profile Finder
    const popupboxGitHub = () => {
        const content = (
            <>
                <img className='project__image__popup pb-3' src={GitHub} alt='GitHub profile finder project with JavaScript'/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis convallis convallis tellus id. Dolor sit amet consectetur adipiscing elit.</p>
                <b>Demo: </b><a href="https://gallant-varahamihira-b81efc.netlify.app/" className='hyper__link' onClick={"https://gallant-varahamihira-b81efc.netlify.app/"}>GitHub Finder</a><br />
                <b>GitHub: </b><a href="https://github.com/BlakeACollins/github-finder" className='hyper__link' onClick={"https://github.com/BlakeACollins/github-finder"}>GitHub Profile Finder</a>
                
            </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "GitHub Profile Finder with JavaScript",
              },
            },
          });
    }

    const popupboxConfigGitHub = {
        titleBar: {
            enable: true,
          },
          fadeIn: true,
          fadeInSpeed: 600
    }
    //MealFinder App
    const popupboxMealFinder = () => {
        const content = (
            <>
                <img className='project__image__popup pb-3' src={MealFinder} alt='Meal Finder app'/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis convallis convallis tellus id. Dolor sit amet consectetur adipiscing elit.</p>
                <b>Demo: </b><a href="https://blakeacollins.github.io/mealFinder/" className='hyper__link' onClick={"https://blakeacollins.github.io/mealFinder/"}>Meal Finder</a><br />
                <b>GitHub: </b><a href="https://github.com/BlakeACollins/mealFinder" className='hyper__link' onClick={"https://github.com/BlakeACollins/mealFinder"}>Meal Finder Project</a>
                
            </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "Meal Finder App with JavaScript",
              },
            },
          });
    }

    const popupboxConfigMealFinder = {
        titleBar: {
            enable: true,
          },
          fadeIn: true,
          fadeInSpeed: 600
    }
    //Google UI Clone
    const popupboxGoogleClone = () => {
        const content = (
            <>
                <img className='project__image__popup pb-3' src={Google} alt='Google UI Clone with search function'/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis convallis convallis tellus id. Dolor sit amet consectetur adipiscing elit.</p>
                <b>Demo: </b><a href="https://google-ui-clone.vercel.app/" className='hyper__link' onClick={"https://google-ui-clone.vercel.app/"}>Google Clone</a><br />
                <b>GitHub: </b><a href="https://github.com/BlakeACollins/google-UI-clone" className='hyper__link' onClick={"https://github.com/BlakeACollins/google-UI-clone"}>Google Clone Project</a>
                
            </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "Google Clone with Next.js",
              },
            },
          });
    }

    const popupboxConfigGoogleClone = {
        titleBar: {
            enable: true,
          },
          fadeIn: true,
          fadeInSpeed: 600
    }
    //TBD
    const popupboxGmail = () => {
        const content = (
            <>
                <img className='project__image__popup pb-3' src={MealFinder} alt='Gmail Clone'/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis convallis convallis tellus id. Dolor sit amet consectetur adipiscing elit.</p>
                <b>Demo: </b><a href='https://clone-3d506.web.app/' className='hyper__link' onClick={"https://clone-3d506.web.app/"}>Gmail Clone</a><br />
                <b>GitHub: </b><a href='https://github.com/BlakeACollins/amazon-clone' className='hyper__link' onClick={"https://github.com/BlakeACollins/amazon-clone"}>Gmail Clone Project</a>
                
            </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "TBD",
              },
            },
          });
    }

    const popupboxConfigGmail = {
        titleBar: {
            enable: true,
          },
          fadeIn: true,
          fadeInSpeed: 600
    }
    //Web Shop
    const popupboxWebShop = () => {
        const content = (
            <>
                <img className='project__image__popup pb-3' src={MealFinder} alt='Web Shop E-commerce app'/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis convallis convallis tellus id. Dolor sit amet consectetur adipiscing elit.</p>
                <b>Demo: </b><a href='https://clone-3d506.web.app/' className='hyper__link' onClick={"https://clone-3d506.web.app/"}>Web Shop E-Commerce Store</a><br />
                <b>GitHub: </b><a href='https://github.com/BlakeACollins/amazon-clone' className='hyper__link' onClick={"https://github.com/BlakeACollins/amazon-clone"}>Web Shop Project</a>
                
            </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "TBD",
              },
            },
          });
    }

    const popupboxConfigWebShop = {
        titleBar: {
            enable: true,
          },
          fadeIn: true,
          fadeInSpeed: 600
    }
    //Omni Food UI 
    const popupboxOmniFood = () => {
        const content = (
            <>
                <img className='project__image__popup pb-3' src={OmniFood} alt='Omni Food Delivery Front End'/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis convallis convallis tellus id. Dolor sit amet consectetur adipiscing elit.</p>
                <b>Demo: </b><a href="https://blakeacollins.github.io/OmniFood/" className='hyper__link' onClick={"https://blakeacollins.github.io/OmniFood/"}>Omni Food Delivery</a><br />
                <b>GitHub: </b><a href="https://github.com/BlakeACollins/OmniFood" className='hyper__link' onClick={"https://github.com/BlakeACollins/OmniFood"}>Omni Food Project</a>
                
            </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "Omni Food Delivery UI",
              },
            },
          });
    }

    const popupboxConfigOmniFood = {
        titleBar: {
            enable: true,
          },
          fadeIn: true,
          fadeInSpeed: 600
    }
    

    return (
        <>
        <div id='projects' className='project__wrapper'>
            <div className='container'>
                <h1 className='text-uppercase text-center py-5' >projects</h1>
                    <div className='image__box__wrapper row justify-content-center'>
                        <div className='project__image__box' onClick={popupboxWhatsapp}>
                            <h5 className='text-center mb-3'>Whatsapp Clone</h5>
                            <img className='project__image' src={Whatsapp} alt=''/>
                            <div className='overflow'></div>
                            <FontAwesomeIcon className='project__icon' icon={faSearchPlus} />
                        </div>
                    {/* - */}
                        <div className='project__image__box' onClick={popupboxHuluClone}>
                            <h5 className='text-center mb-3'>Hulu Clone</h5>
                            <img className='project__image' src={Hulu} alt=''/>
                            <div className='overflow'></div>
                            <FontAwesomeIcon className='project__icon' icon={faSearchPlus} />
                        </div>
                    {/* - */}
                        <div className='project__image__box' onClick={popupboxGitHub}>
                            <h5 className='text-center mb-3'>GitHub Finder</h5>
                            <img className='project__image' src={GitHub} alt=''/>
                            <div className='overflow'></div>
                            <FontAwesomeIcon className='project__icon' icon={faSearchPlus} />
                        </div>
                    
                    
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigWhatsapp} />
            <PopupboxContainer {...popupboxConfigHulu} />
            <PopupboxContainer {...popupboxConfigGitHub} />
            <PopupboxContainer {...popupboxConfigMealFinder} />
            <div className='container mt-3'>
                    <div className='image__box__wrapper row justify-content-center'>

                    {/* <div className='project__image__box' onClick={popupboxWebShop}>
                            <h5 className='text-center mb-3'>TDB</h5>
                            <img className='project__image' src={GitHub} alt='Web Shop E-Commerce'/>
                            <div className='overflow'></div>
                            <FontAwesomeIcon className='project__icon' icon={faSearchPlus} />
                        </div>
                        
                    {/*
                        <div className='project__image__box' onClick={popupboxGmail}>
                            <h5 className='text-center mb-3'>TBD</h5>
                            <img className='project__image' src={Hulu} alt=''/>
                            <div className='overflow'></div>
                            <FontAwesomeIcon className='project__icon' icon={faSearchPlus} />
                        </div> */}
                        <div className='project__image__box' onClick={popupboxGoogleClone}>
                            <h5 className='text-center mb-3'>Google UI Clone</h5>
                            <img className='project__image' src={Google} alt=''/>
                            <div className='overflow'></div>
                            <FontAwesomeIcon className='project__icon' icon={faSearchPlus} />
                        </div>
                    {/* - */}
                    <div className='project__image__box' onClick={popupboxMealFinder}>
                            <h5 className='text-center mb-3'>Meal Finder</h5>
                            <img className='project__image' src={MealFinder} alt=''/>
                            <div className='overflow'></div>
                            <FontAwesomeIcon className='project__icon' icon={faSearchPlus} />
                        </div>
                        
                    {/* - */}
                        <div className='project__image__box' onClick={popupboxOmniFood}>
                            <h5 className='text-center mb-3'>Omni Food</h5>
                            <img className='project__image' src={OmniFood} alt=''/>
                            <div className='overflow'></div>
                            <FontAwesomeIcon className='project__icon' icon={faSearchPlus} />
                        </div>
                        <PopupboxContainer {...popupboxConfigGoogleClone} />
                        <PopupboxContainer {...popupboxConfigGmail} />
                        <PopupboxContainer {...popupboxConfigWebShop} />
                        <PopupboxContainer {...popupboxConfigOmniFood} />
                </div>
            </div>
        </div>
        <div>
        <MiniProjects />
        <Contact />
        <Footer />
        </div>
        </>
    )
}

export default Projects;