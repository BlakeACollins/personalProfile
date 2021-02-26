import React from 'react'
import logo from './logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="index.html">
                   {/* <img className='logo' src={logo} alt='Evergreen Development Logo'/>*/}Logo Here</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faAngleDoubleDown} style={{ color: '#fff' }}/>
                    </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Projects</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">About Me</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                    </li>
            </ul>
    </div>
  </div>
</nav>

    )
}

export default Navbar;