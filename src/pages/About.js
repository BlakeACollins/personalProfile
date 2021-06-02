import React from 'react'
import Me from '../img/me.jpg'
import HTML from '../img/HTML.png'
import CSS from '../img/CSS.png'
import Bootstrap from '../img/bootstrap.svg'
import Tailwind from '../img/Tailwind.png'
import JS from '../img/JS.png'
import react from '../img/React.png'
import redux from '../img/redux.svg'
import next from '../img/Next.png'
import firebase from '../img/Firebase.png'
import Webflow from '../img/Webflow.svg'
import WordPress from '../img/wordpress.svg'
import Services from '../pages/Services'
import Footer from '../components/Footer'
import '../style/about.css'


const About = () => {
    return (
        <>
        <main>
        <div id='about' className='container py-5'>
            <div className='row'>
                <div className='col-lg-6 col-xm-12'>
                    <div className='photo__container'>
                        <img className='profile__pic mb-5' src={Me} alt='Headshot of Blake Collins, the best web developer'/>
                    </div>
                </div>

                <div className='col-lg-6 col-xm-12'>
                    <h2 className='about__heading pb-3'>Hi, I'm Blake!</h2>
                   
                    <p className='about__me'>I am a self taught front-end developer that is fluent in HTML5, CSS3, Bootstrap, React, and more. I love web development and all the challenges it can bring. I approach all my projects with a mobile-first design, ensuring that your website will look great on mobile devices, tablets, and desktops! I'm adept at composing websites from scratch or I can utilize popular website makers like WordPress, Wix, Squarespace, Kajabi or Webflow, to get your site up and running fast!
                    </p>
                    <p className='about__me'>I believe your website should be a marketing asset, not an engineering nightmare. Let me worry about your site so you can focus on your business.</p>
                 

                <div className='flex justify-space-around'>
                    <h4 className='about__heading pb-3'>
                        Technologies Used
                    </h4>
                
                    <img 
                    height={65}
                    width={65}
                    src={HTML} alt='HTML' />
                    <img 
                    height={65}
                    width={55}
                    src={CSS} alt='CSS' />
                    <img 
                    height={65}
                    width={65}
                    src={Bootstrap} alt='Bootstrap' />
                    <img 
                    height={65}
                    width={65}
                    src={Tailwind} alt='Tailwind CSS' />
                    <img 
                    height={65}
                    width={50}
                    src={JS} alt='JavaScript' />
                    <img 
                    height={65}
                    width={65}
                    src={react} alt='React' />
                    <img 
                    height={65}
                    width={65}
                    src={redux} alt='Redux' />
                    <img 
                    height={65}
                    width={60}
                    src={next} alt='Next.js' />
                    <img 
                    height={65}
                    width={50}
                    src={firebase} alt='Google Firebase' />
                    <img 
                    height={60}
                    width={65}
                    src={WordPress} alt='WordPress' />
                    <img 
                    height={60}
                    width={65}
                    src={Webflow} alt='Webflow' />

            </div>
        </div>
</div>
            <Services />
        </div>
    </main>
    <Footer />
    </>
    )
    
}

export default About
