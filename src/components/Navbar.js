import React, { Component } from 'react'
// import logo from '../assets/nelsonel2.png'
import './NavbarStyles.css'

class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            < >
                <nav>
                    <div>
                        <a className='logo' href='/'>
                            {/* <img className='logo-image' src={logo} /> */}
                            <h2 className='nav-title'>Nelsonel<span className='tech-nav'>Tech</span></h2>
                        </a>
                    </div>

                    <div>
                        <ul id='navbar' className={this.state.clicked ? '#navbar active' : '#navbar'}>
                            <li>
                                <a className='active' href='/'>Home</a>
                            </li>
                            <li>
                                <a href='/About/'>About</a>
                            </li>
                            <li>
                                <a href='/Services/'>Services</a>
                            </li>
                            <li>
                                <a href='/Portfolio/'>Portfolio</a>
                            </li>
                            <li>
                                <a href='/Price/'>Price</a>
                            </li>
                            <li>
                                <a href='/Blogs/'>Blog</a>
                            </li>
                            <li>
                                <a href='/Contact/'>Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div id='mobile' onClick={this.handleClick}>
                        <i id='bar' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar;