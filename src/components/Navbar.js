import React from "react";
import { Link } from "react-scroll";
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {

 
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">

        <h5 style={{ color: '#04e03b' }}>Evergreen</h5><h5 style={{ color: '#3695e3' }}>Development</h5>

        <button className='navbar-toggler' 
                type='button' 
                 data-toggle="collapse" 
                 data-target="#navbarSupportedContent" 
                 aria-controls="navbarSupportedContent" 
                 aria-expanded="false" 
                 aria-label="Toggle navigation">
          <span className='navbar-toggler-icon'/>
        </button>

        <div className="collapse navbar-collapse text-uppercase" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link smooth={true} to="home" className="nav-link" href='#'>Home</Link>
            </li>
            <li className="nav-item active">
              <Link smooth={true} to="about" offset={-110} className="nav-link" href='#'>about me</Link>
            </li>
            <li className="nav-item active">
              <Link smooth={true} to="services" offset={-110} className="nav-link" href="#">services</Link>
            </li>
            <li className="nav-item active">
              <Link smooth={true} to="projects" offset={-110} className="nav-link" href="#">projects</Link>
            </li>
            <li className="nav-item active">
              <Link smooth={true} to="experience" offset={-110} className="nav-link" href="#">experience</Link>
            </li>

            <li className="nav-item active">
              <Link smooth={true} to="contact" offset={-110} className="nav-link" href="#">contact</Link>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  )
}

export default Navbar