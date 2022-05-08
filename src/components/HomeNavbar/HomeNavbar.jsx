import React from 'react';
import './HomeNavbar.scss';
import {BsChevronDown} from 'react-icons/bs';

const HomeNavbar = () => {
  return (
    <>
    <div className='app__homenavbar'>
      <ul>
      <li><a href='#' className='app__homenavbar-link'>All Home</a></li>
      <li>|</li>
      <li><a href='#' className='app__homenavbar-link active'>Home</a></li>
      <li><a href='#' className='app__homenavbar-link'>Literature</a></li>
      <li><a href='#' className='app__homenavbar-link'>Home Gifts</a></li>
      </ul>

     <button type="button" className="app__homenavbar-filter-xl">Filter by <span><BsChevronDown/></span></button>
    </div>
    </>
  )
}

export default HomeNavbar
