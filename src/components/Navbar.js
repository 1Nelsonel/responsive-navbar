import React, { Component } from 'react'
import logo from '../assets/logo.svg'
import './NavbarStyles.css'

class Navbar extends Component {
    state = {clicked: false};
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render() {
  return ( 
    <>
        <nav>
            <a href='index.html'>
                <img src={logo} />
            </a>
            <div>
                <ul id='navbar' className={this.state.clicked ? '#navbar active' : '#navbar'}>
                    <li>
                        <a className='active' href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#'>Shop</a>
                    </li>
                    <li>
                        <a href='#'>Blog</a>
                    </li>
                    <li>
                        <a href='#'>About</a>
                    </li>
                    <li>
                        <a href='#'>Contact</a>
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