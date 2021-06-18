import React from 'react';
import Typed from 'react-typed';
import '../style/header.css'


const Header = () => {
    return (
        <>
        <div id='home' className='header__wraper'>
            <h3 className='p-3'>
                <span style={{ color: '#140aaa' }}>Blake</span> <span style={{ color: '#140aaa'}}>Collins</span>
            </h3>
            
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
