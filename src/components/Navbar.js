import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/logo.png'

export default class Navbar extends Component {
    state ={
        navbarOpen: false,
        css: 'collapse navbar-collapse',
        links: [{
            id:1,
            path:'/',
            text:'home'
        },
        {
            id:2,
            path:'/About',
            text:'about'
        },
        {
            id:3,
            path:'/Services',
            text: 'services'
        },
        {
            id:4,
            path: '/Projects',
            text: 'projects'
        },
        {
            id: 5,
            path:'/Experience',
            text:'experience'
        },
        {
            id: 6,
            path: '/Contact',
            text: 'contact'
        }
        
        ]
       
    }
    navbarHandler = () => {
         this.state.navbarOpen?this.setState(
             {navbarOpen:false,css:"collapse navbar-collapse"})
             :this.setState({
                 navbarOpen:true,css:'collapse navbar-collapse show'
             })
             
    };
    render() {
        return (
            <nav className='navbar sticky-top navbar-expand-lg navbar-dark bg-dark'>
                <Link to='/' className='navbar-brand'>
                   {/*<img src={Logo} alt="My compnay logo" />*/}Logo here
                </Link>
                <button className='navbar-toggler' type='button' onClick={this.navbarHandler}>
                <span className='navbar-toggler-icon'/>
                </button>
                <div className={this.state.css}>
                    <ul className="navbar-nav ml-auto mb-lg-0">
                        {
                            this.state.links.map(link => {
                                return (
                                    <li key={link.id} className='nav-item'>
                                        <Link to={link.path} className='nav-link text-uppercase'>
                                            {link.text}
                                        </Link>
                                    </li>
                                );
                            } )}
                    </ul>
                </div>
            </nav>
        )
    }
}