import React from 'react'
import Me from '../img/me.jpg'
import Tech from '../components/Tech'
import Services from '../components/Services'
import Footer from '../components/Footer'
import Contact from '../pages/Contact'
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
                   
                    <p className='about__me'>I am a self taught front-end developer that is fluent in HTML5, CSS3, Bootstrap, React, and more. I love web development and all the challenges it can bring. I approach all my projects with a mobile-first design, ensuring that your website will look great on mobile devices, tablets, and desktops! I'm adept at composing websites from scratch or I can utilize popular website makers like Webflow, Wix, Squarespace, or Kajabi to get your site up and running fast!
                    </p>
                    <p className='about__me'>I believe your website should be a marketing asset, not an engineering nightmare. Let me worry about your site so you can focus on your business.</p>   
        </div>
            <Tech />   
</div>
            <Services />
            <Contact />
        </div>
    </main>
    <footer>
        
        <Footer />
    </footer>
    
    </>
    )
    
}

export default About
