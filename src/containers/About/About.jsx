import React from 'react';
import './About.scss';
import {BsArrowRight} from 'react-icons/bs';
import { images } from '../../constant';

const About = () => {
  return (
    <div className='app__about'>
      <div className='app__about-read'>
      <h5>Next Step</h5>
      <h2>Recommended reading</h2>
      <button type='button' className='app__about-read-btn'>See all Literature <span><BsArrowRight/></span></button>
      </div>

      <div className='app__about-gift'>
      <div className='app__about-gift-text'>
      <h2>Gifts for home</h2>
      <p>Carefully crafted aromas to enhance the personal space—from the living room to the office—delivering tranquillity, intrigue and delight. </p>
      <button type='button' className='app__about-gift-btn'>See all Literature <span><BsArrowRight/></span></button>
      </div>
      <img src={images.Gift} alt='gift'/>
      </div>
    </div>
  )
}

export default About
