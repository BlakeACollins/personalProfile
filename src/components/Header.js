import React from 'react';
import Typed from 'react-typed';

const Header = () => {
    return (
        <div id='home' className='header__wraper'>
            <div className='main__info'>
                <h1>Web Design and Development</h1>
                <br/>
                <Typed className='typed__text'
                strings={[
                    "Prototyping","Web Design", "Web Development", "Mobile Web Development", "SEO Improvements", "Debugging"
                ]}
                typeSpeed={40}
                backSpeed={60}
                loop >
                </Typed>
               
            </div>
            
        </div>
    )
}

export default Header
