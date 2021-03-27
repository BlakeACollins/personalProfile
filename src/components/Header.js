import React from 'react';
import Typed from 'react-typed';
import Logo from '../img/logo.png'
import '../style/header.css'

const Header = () => {
    return (
        <div id='home' className='header__wraper'>
            <img className='logo' src={Logo} alt=''/>
            {/*<h4>EvergreenDevelopment</h4>*/}
            <div className='main__info'>
                <h1>Web Design and Development</h1>
                <br/>
                <Typed className='typed__text'
                strings={[
                    "Prototyping","Web Design", "Website Builders", "Web App Development", "Mobile Web Development", "SEO Improvements", "Debugging",
                    "Cloud Hosting Services"
                ]}
                typeSpeed={38}
                backSpeed={50}
                loop >
                </Typed>
               
            </div>
            
        </div>
    )
}

export default Header
