import React from 'react'
import '../style/miniProjects.css'
import '../App.css'


function MiniProjects() {
    return (
        <div className='container'>
            <h3 className='text-uppercase pb-3' style={{ color: '#0343bb'}}>other projects</h3>
            
            <div className=''>
                <h5>IT Job Logger</h5>
                <p className='text-break'>React app to track IT department logs and issues. You can edit exsisting logs, add / delete new logs, and create / delete technicains. Uses JSON-Server as a mock backend. This project will have to be downloaded and run on your local machine. Made with React, Redux, JSON, and Materialize.</p>
                <a className='hyper__link' href="https://github.com/BlakeACollins/it-job-logger">GitHub</a>
            </div>
            <hr className='break' />
            <div className='pt-3'>
                <h5>Blog Admin UI</h5>
                <p>Admin UI for a blog website. Made with HTML, Bootstrap, and CSS.</p>
                <a className='hyper__link'href='https://blakeacollins.github.io/AdminUI/'>Demo</a>
            </div>
            <hr className='break' />
            <div className='pt-3'>
                <h5>Brick Breaker</h5>
                <p>A classic game where you control a paddle with the arrow keys to bounce a ball up to break bricks. This app uses the HTML5 canvas element and API</p>
                <a className='hyper__link'href="https://blakeacollins.github.io/breakOut/">Demo</a>
            </div>
            <hr className='break' />
            <div className='pt-3'>
                <h5>Photo Gallery</h5>
                <p>In this project, I created an interactive photo gallery using JavaScript and jQuery.</p>
                <a className='hyper__link'href='https://blakeacollins.github.io/interactivePhotoGallery/'>Demo</a>
            </div>
            <hr className='break' />
            <div className='pt-3'>
                <h5>Speech Text Reader</h5>
                <p>A text to speech app for non-verbal people. Pre-made buttons and custom text speech. This project uses the Web Speech API</p>
                <a className='hyper__link'href='https://blakeacollins.github.io/speechTextReader/'>Demo</a>
            </div>
            <hr className='break' />
            <div className='pt-3'>
                <h5>Pixel Art Marker</h5>
                <p>A single-page web app that allows users to draw pixel art on a customizable canvas. Made with HTML, CSS, and JavaScript.</p>
                <a className='hyper__link'href='https://blakeacollins.github.io/Pixel-Art-Marker/'>Demo</a>
            </div>
            <hr className='break' />
            
            <div className='pt-3'>
                <h5>Cloud Money</h5>
                <p>A multi-page Bootstrap theme with a carousel, modal window, auto playing video, accordions, and a blog section.</p>
                <a className='hyper__link'href='https://blakeacollins.github.io/CloudMoney/index.html'>Demo</a>
            </div>
            <br />
            <a href="https://github.com/BlakeACollins" class="badge badge-info">Find More on GitHub</a>
        </div>
    )
}

export default MiniProjects
