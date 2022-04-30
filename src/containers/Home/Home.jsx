import React, { useState } from 'react';
import './Home.scss';
import { products } from '../../constant';
import {BsChevronDown} from 'react-icons/bs';

const Home = () => {
  const [toggle, setToggle] = useState(false);

  const toggleFilter = () => {
    setToggle(!toggle);
  }
  return (
    <div className='app__home'>
    <div className='app__home-head'>
    <a href='#' className='app__home-logo'>Aēsop<span>®</span></a>
    <a href='#' className='app__home-text'>Home</a>
    </div>
    
    <div className='app__homenavbar-section'>
    <div className='app__homenavbar'>
    <ul>
    <li><a href='#' className='app__homenavbar-link'>All Home</a></li>
    <li>|</li>
    <li><a href='#' className='app__homenavbar-link active'>Home</a></li>
    <li><a href='#' className='app__homenavbar-link'>Literature</a></li>
    <li><a href='#' className='app__homenavbar-link'>Home Gifts</a></li>
    </ul>
  {toggle ?
    <button type="button" className="app__homenavbar-filter" onClick={toggleFilter}>X</button> :
    <button type="button" className="app__homenavbar-filter" onClick={toggleFilter}>Filter by <span><BsChevronDown/></span></button>
  }

  </div>
  {
    toggle && 
    <ul className='app__homenavbar-checkbox'>
    <li>Aroma</li>
    <li><hr/></li>
    <li><input type="checkbox" id="allaromas" name="allaromas"/> <label for="allaromas">All aromas</label></li>
    <li><input type="checkbox" id="scales" name="scales"/> <label for="scales">Citrus</label></li>
    <li><input type="checkbox" id="scales" name="scales"/> <label for="scales">Floral</label></li>
    <li><input type="checkbox" id="scales" name="scales"/> <label for="scales">Woody</label></li>
    <li><input type="checkbox" id="scales" name="scales"/> <label for="scales">Fresh</label></li>
    <li><input type="checkbox" id="scales" name="scales"/> <label for="scales">Spicy</label></li>
    <li><input type="checkbox" id="scales" name="scales"/> <label for="scales">Opulent</label></li>
    <li><input type="checkbox" id="scales" name="scales"/> <label for="scales">Earthy</label></li>
    <li><input type="checkbox" id="scales" name="scales"/> <label for="scales">Herbaceous</label></li>
    </ul>
  }
    </div>

    <main>
    <div className='app__home-about'>
    <h2 className="app__home-headline">Formulations to instil aromatic quietude while stimulating senses. </h2>
    <p className="app__home-info">'Home is our emotional heartland,’ says globally revered designer Ilse Crawford. To complement this truth, Aesop offers a range of aromatic formulations that are practical and pleasing in equal measure.</p>
    </div>
    
    {products.map((index) => (
      <div className='app__home-products'>
      <div className='app__home-product'>
      <img src={index.imgUrl} alt="candle"/>
      <h4 className='app__home-product-heading'>{index.name}</h4>
      <p className='app__home-product-para'>{index.size ? `${index.size + ` /`}` : ''} {index.price}</p>
      <hr/>
      <p className='app__home-product-desc-title'><span>{index.detailsTitle}</span> {index.detailsInfo}</p>
      <hr/>
      <p className='app__home-product-desc'><span>{index.descriptionTitle}</span> {index.decriptionInfo}</p>
      <hr/>
      </div>
      <button type='button'>{index.availability=='1' ? 'Add to your cart - ' + `${index.price}`: 'Out of stock - ' + `${index.price}`}</button>
      </div>
    ))}

    </main>
    </div>
  )
}

export default Home
