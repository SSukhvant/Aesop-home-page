import React from 'react';
import './Navbar.scss';
import {FiSearch} from 'react-icons/fi';

const Navbar = () => {
  return (
    <div className='app__navbar'>
    <p className='app__navbar-head'>In line with government guidelines, our stores in Hong Kong will remain open under adjusted opening hours. <a href="https://assistance.aesop.com/hc/en-hk/requests/new" className="app__navbar-head-link">For assistance, please click here.</a></p>
    
    <div className="app__navbar-head-2">
    <p>Enjoy complimentary carbon neutral shipping on all Hong Kong and Macau orders.</p>
    <a href='#'>+</a>
    </div>

    <nav>
    <ul>
    <li><a href='#' className='app__navbar-link'>Skin Care</a></li>
    <li><a href='#' className='app__navbar-link'>Body & Hand</a></li>
    <li><a href='#' className='app__navbar-link'>Hair</a></li>
    <li><a href='#' className='app__navbar-link'>Fragrance</a></li>
    <li><a href='#' className='app__navbar-link'>Home</a></li>
    <li><a href='#' className='app__navbar-link'>Kits & Travel</a></li>
    <li><a href='#' className='app__navbar-link'>Gifts</a></li>
    <li><a href='#' className='app__navbar-link'>Read</a></li>
    <li><a href='#' className='app__navbar-link'>Stores</a></li>
    <li><a href='#' className='app__navbar-link-icon'><FiSearch/></a></li>
    </ul>
    <ul>
    <li><a href='#' className='app__navbar-link'>Login</a></li>
    <li><a href='#' className='app__navbar-link'>Cart</a></li>
    </ul>
    </nav>

    </div>
  )
}

export default Navbar
