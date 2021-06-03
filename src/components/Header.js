import React from 'react';
import Typed from 'react-typed';
import Logo from '../img/logo.png'
import '../style/header.css'


const Header = () => {
    return (
        <>
        <div id='home' className='header__wraper'>
            <h3 className='p-3'>
                <span style={{ color: '#0368bb' }}>Blake</span> <span style={{ color: '#04f841'}}>Collins</span>
            </h3>
            {/*<img className='logo' src={Logo} alt='Evergreen Development Logo'
            width= '150' height= '150' 
            />*/}
            {/*<h4>EvergreenDevelopment</h4>*/}
            <div className='main__info'>
                <h1>Web Design and Development</h1>
                <br/>
                <Typed className='typed__text'
                strings={[
                    "Prototyping","Web Design", "Website Builders", "Web App Development", "Mobile Web Development", "SEO Improvements", "Debugging", "Accessibility"
                ]}
                typeSpeed={38}
                backSpeed={50}
                loop >
                </Typed>
            </div>
        </div>
       
        </>
    )
}

export default Header
