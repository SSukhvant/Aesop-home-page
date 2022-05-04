import React from 'react';
import {BsArrowUpRight} from 'react-icons/bs';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='app__footer'>
      <div className='app__footer-1'>
      <div className='app__footer-email'>
      <input type="text" className='email' placeholder='Email address'/>
      <div className='app__footer-email-checkbox'>
      <input type="checkbox" id="subscribe" name="subscribe"/>
      <label htmlFor="subscribe">Subscribe to receive communications from Aesop about our products and services. By subscribing, you confirm you have read and accept our <a href='#'>privacy policy <BsArrowUpRight/></a></label>
      </div>
      </div>

      <div className='app__footer-support'>
      <ul>
      <li><h4>Orders and support</h4></li>
      <li><hr/></li>
      <li><a href='#'>Contact us</a></li>
      <li><a href='#'>FAQs <BsArrowUpRight/></a></li>
      <li><a href='#'>Shipping <BsArrowUpRight/></a></li>
      <li><a href='#'>Returns <BsArrowUpRight/></a></li>
      <li><a href='#'>Order history</a></li>
      <li><a href='#'>Term and conditions</a></li>
      </ul>
      </div>

      <div className='app__footer-service'>
      <ul>
      <li><h4>Services</h4></li>
      <li><hr/></li>
      <li><a href='#'>Live assistance</a></li>
      <li><a href='#'>Corporate gifts</a></li>
      <li><a href='#'>Facial appointments</a></li>
      </ul>
      </div>

      <div className='app__footer-location'>
      <ul>
      <li><h4>Location preferences</h4></li>
      <li><hr/></li>
      <li>Shipping: <a href='#'>Hong Kong (S.A.R)</a></li>
      <li>Language: <a href='#'>English</a></li>
      </ul>
      </div>

      </div>

      <div className='app__footer-2'>
      <div className='app__footer-sustainability'>
      <h4>Sustainability</h4>
      <hr/>
      <p>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. <a href='#'>Learn more</a></p>
      </div>

      <div className='app__footer-about'>
      <ul>
      <li><h4>About</h4></li>
      <li><hr/></li>
      <li><a href='#'>Our story</a></li>
      <li><a href='#'>Foundation <BsArrowUpRight/></a></li>
      <li><a href='#'>Careers</a></li>
      <li><a href='#'>Returns</a></li>
      <li><a href='#'>Privacy policy</a></li>
      <li><a href='#'>Accessibility</a></li>
      </ul>
      </div>

      <div className='app__footer-social'>
      <ul>
      <li><h4>Social media</h4></li>
      <li><hr/></li>
      <li><a href='#'>Instagram <BsArrowUpRight/></a></li>
      <li><a href='#'>Twitter <BsArrowUpRight/></a></li>
      <li><a href='#'>LinkedIn <BsArrowUpRight/></a></li>
      <li><a href='#'>WeChat</a></li>
      <li><a href='#'>Weibo <BsArrowUpRight/></a></li>
      </ul>
      </div>

      <div className='app__footer-location'>

      </div>

      </div>

      <div className='app__footer-3'>
      <h4><span>©</span> Aesop</h4>
      </div>
    </div>
  )
}

export default Footer
