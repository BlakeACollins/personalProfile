import Footer from '../components/Footer';
import Amazon from '../img/amazon-project-min.jpg';
import Netflix from '../img/netflix-project.jpg';
import GitHub from '../img/github-project.jpg';
import MealFinder from '../img/meal-finder-project.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css'
import MiniProjects from '../components/MiniProjects'
import Contact from '../pages/Contact'
import '../style/projects.css'





const Projects = () => {
    //Amazon Clone
    const popupboxAmazon = () => {
        const content = (
            <>
                <img className='project__image__popup pb-3' src={Amazon} alt='Amazon Clone project'/>
                
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis convallis convallis tellus id. Dolor sit amet consectetur adipiscing elit.</p>
                <b>Demo: </b><a href='https://clone-3d506.web.app/' className='hyper__link' onClick={"https://clone-3d506.web.app/"}>Amazon Clone</a><br />
                <b>GitHub: </b><a href='https://github.com/BlakeACollins/amazon-clone' className='hyper__link' onClick={"https://github.com/BlakeACollins/amazon-clone"}>Amazon Clone Project</a>
                
            </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "Full-Stack React Amazon Clone",
              },
            },
          });
    }

    const popupboxConfigAmazon = {
        titleBar: {
            enable: true,
          },
          fadeIn: true,
          fadeInSpeed: 600
    }
    //Netflix Clone
    const popupboxNetflix = () => {
        const content = (
            <>
                <img className='project__image__popup pb-3' src={Netflix} alt='Netflix Clone project'/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis convallis convallis tellus id. Dolor sit amet consectetur adipiscing elit.</p>
                <b>Demo: </b><a href='https://clone-3d506.web.app/' className='hyper__link' onClick={"https://clone-3d506.web.app/"}>Netflix Clone</a><br />
                <b>GitHub: </b><a href='https://github.com/BlakeACollins/amazon-clone' className='hyper__link' onClick={"https://github.com/BlakeACollins/amazon-clone"}>Netflix Clone Project</a>
                
            </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "Full-Stack React Netflix Clone",
              },
            },
          });
    }

    const popupboxConfigNetflix = {
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
                <img className='project__image__popup pb-3' src={GitHub} alt='GitHub profile finder project'/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis convallis convallis tellus id. Dolor sit amet consectetur adipiscing elit.</p>
                <b>Demo: </b><a href='https://clone-3d506.web.app/' className='hyper__link' onClick={"https://clone-3d506.web.app/"}>GitHub Finder</a><br />
                <b>GitHub: </b><a href='https://github.com/BlakeACollins/amazon-clone' className='hyper__link' onClick={"https://github.com/BlakeACollins/amazon-clone"}>GitHub Profile Finder Project</a>
                
            </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "GitHub Profile Finder App with React",
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
                <b>Demo: </b><a href='https://clone-3d506.web.app/' className='hyper__link' onClick={"https://clone-3d506.web.app/"}>Meal Finder App</a><br />
                <b>GitHub: </b><a href='https://github.com/BlakeACollins/amazon-clone' className='hyper__link' onClick={"https://github.com/BlakeACollins/amazon-clone"}>Meal Finder Project</a>
                
            </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "Meal Finder App with React",
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
    //Regular Joe Coffee
    const popupboxJoeCoffee = () => {
        const content = (
            <>
                <img className='project__image__popup pb-3' src={MealFinder} alt='Regular Joe Coffee'/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis convallis convallis tellus id. Dolor sit amet consectetur adipiscing elit.</p>
                <b>Demo: </b><a href='https://clone-3d506.web.app/' className='hyper__link' onClick={"https://clone-3d506.web.app/"}>Regular Joe Coffee Shop</a><br />
                <b>GitHub: </b><a href='https://github.com/BlakeACollins/amazon-clone' className='hyper__link' onClick={"https://github.com/BlakeACollins/amazon-clone"}>Regular Joe Coffee Project</a>
                
            </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "Regular Joe Coffee Shop",
              },
            },
          });
    }

    const popupboxConfigJoeCoffee = {
        titleBar: {
            enable: true,
          },
          fadeIn: true,
          fadeInSpeed: 600
    }
    //Gmail Clone
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
                text: "Gmail Clone",
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
                text: "Web Shop E-Commerce with React",
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
    //Instagram Clone 
    const popupboxInsta = () => {
        const content = (
            <>
                <img className='project__image__popup pb-3' src={MealFinder} alt='Instagram Clone'/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis convallis convallis tellus id. Dolor sit amet consectetur adipiscing elit.</p>
                <b>Demo: </b><a href='https://clone-3d506.web.app/' className='hyper__link' onClick={"https://clone-3d506.web.app/"}>Instagram Clone</a><br />
                <b>GitHub: </b><a href='https://github.com/BlakeACollins/amazon-clone' className='hyper__link' onClick={"https://github.com/BlakeACollins/amazon-clone"}>Instagram Clone Project</a>
                
            </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "Instagram Clone with React Native",
              },
            },
          });
    }

    const popupboxConfigInsta = {
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
                        <div className='project__image__box' onClick={popupboxAmazon}>
                            <h5 className='text-center mb-3'>Amazon Clone</h5>
                            <img className='project__image' src={Amazon} alt=''/>
                            <div className='overflow'></div>
                            <FontAwesomeIcon className='project__icon' icon={faSearchPlus} />
                        </div>
                    {/* - */}
                        <div className='project__image__box' onClick={popupboxNetflix}>
                            <h5 className='text-center mb-3'>Facebook Clone</h5>
                            <img className='project__image' src={Netflix} alt=''/>
                            <div className='overflow'></div>
                            <FontAwesomeIcon className='project__icon' icon={faSearchPlus} />
                        </div>
                    {/* - */}
                        <div className='project__image__box' onClick={popupboxGitHub}>
                            <h5 className='text-center mb-3'>Whatsapp Clone</h5>
                            <img className='project__image' src={GitHub} alt=''/>
                            <div className='overflow'></div>
                            <FontAwesomeIcon className='project__icon' icon={faSearchPlus} />
                        </div>
                    {/* - */}
                        <div className='project__image__box' onClick={popupboxMealFinder}>
                            <h5 className='text-center mb-3'>Hulu UI Clone</h5>
                            <img className='project__image' src={MealFinder} alt=''/>
                            <div className='overflow'></div>
                            <FontAwesomeIcon className='project__icon' icon={faSearchPlus} />
                        </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigAmazon} />
            <PopupboxContainer {...popupboxConfigNetflix} />
            <PopupboxContainer {...popupboxConfigGitHub} />
            <PopupboxContainer {...popupboxConfigMealFinder} />
            <div className='container mt-3'>
                    <div className='image__box__wrapper row justify-content-center'>
                        <div className='project__image__box' onClick={popupboxJoeCoffee}>
                            <h5 className='text-center mb-3'>Google UI Clone</h5>
                            <img className='project__image' src={Amazon} alt=''/>
                            <div className='overflow'></div>
                            <FontAwesomeIcon className='project__icon' icon={faSearchPlus} />
                        </div>
                    {/* - */}
                        <div className='project__image__box' onClick={popupboxGmail}>
                            <h5 className='text-center mb-3'>GitHub Profile Finder</h5>
                            <img className='project__image' src={Netflix} alt=''/>
                            <div className='overflow'></div>
                            <FontAwesomeIcon className='project__icon' icon={faSearchPlus} />
                        </div>
                    {/* - */}
                        <div className='project__image__box' onClick={popupboxWebShop}>
                            <h5 className='text-center mb-3'>Meal Finder</h5>
                            <img className='project__image' src={GitHub} alt='Web Shop E-Commerce'/>
                            <div className='overflow'></div>
                            <FontAwesomeIcon className='project__icon' icon={faSearchPlus} />
                        </div>
                    {/* - */}
                        <div className='project__image__box' onClick={popupboxInsta}>
                            <h5 className='text-center mb-3'>Slack Clone</h5>
                            <img className='project__image' src={MealFinder} alt=''/>
                            <div className='overflow'></div>
                            <FontAwesomeIcon className='project__icon' icon={faSearchPlus} />
                        </div>
                        <PopupboxContainer {...popupboxConfigJoeCoffee} />
                        <PopupboxContainer {...popupboxConfigGmail} />
                        <PopupboxContainer {...popupboxConfigWebShop} />
                        <PopupboxContainer {...popupboxConfigInsta} />
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