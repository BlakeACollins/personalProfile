import React from 'react';
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className='header-wraper'>
            <div className='main-info'>
                <h1>Web Design and Development</h1>
                <Typed className='typed-text'
                strings={[
                    "Prototyping","Web Design", "Web Development", "Mobile Web Development", "Mobile Application Development", "SEO Improvements", "Debugging"
                ]}
                typeSpeed={40}
                backSpeed={60}
                loop >
                </Typed>
                <a href="#" className='btn-main-offer'>contact me</a>
            </div>
            
        </div>
    )
}

export default Header
