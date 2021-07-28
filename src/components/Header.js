import React from 'react';
import Typed from 'react-typed';
import '../style/header.css'


const Header = () => {
    return (
        <>
        {/* NEED TO FIX CONTRAST OF MY FIRST AND LAST NAME. IT IS SCORING AT A  1.25!!! NEW COLOR, #2404f8, 3.08.
        
        
        */}
        <div id='home' className='header__wraper'>
            <h2 className='mr-3 p-3'>
                <span style={{ color: '#fff' }}>Blake</span> <span style={{ color: '#fff'}}>Collins</span>
            </h2>
            
            <div className='main__info'>
                <h1>Web Design and Development</h1>
                <br/>
                <Typed className='typed__text'
                strings={[
                    "Wireframing","Web Design", "Website Builders", "Web App Development", "Mobile Web Development", "SEO Improvements", "Debugging", "Accessibility"
                ]}
                typeSpeed={100}
                backSpeed={100}
                loop >
                </Typed>
            </div>
        </div>
       
        </>
    )
}

export default Header
