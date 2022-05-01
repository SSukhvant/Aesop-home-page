import React, { useState } from 'react';
import './Home.scss';
import { products } from '../../constant';
import {BsChevronDown} from 'react-icons/bs';

const Home = () => {
  const [toggle, setToggle] = useState(false);
  const [userinfo, setUserInfo] = useState({});
  
  const handleChange = (e) => {
    // Destructuring
    const { name, value, checked } = e.target;
      
    console.log(`${value} ${name} is ${checked}`);
    
    // Case 1 : The user checks the box
    if (checked) {
      setUserInfo({
        languages: [...languages, value],
        response: [...languages, value],
      });
    }
    // Case 2  : The user unchecks the box
    else {
      setUserInfo({
        languages: languages.filter((e) => e !== value),
        response: languages.filter((e) => e !== value),
      });
    }
  };
  console.log(userinfo)

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
    <li><input type="checkbox" id="allaromas" name="allaromas" onChange={handleChange}/> <label htmlFor="allaromas">All aromas</label></li>
    <li><input type="checkbox" id="citrus" name="citrus" onChange={handleChange}/> <label htmlFor="citrus">Citrus</label></li>
    <li><input type="checkbox" id="floral" name="floral" onChange={handleChange}/> <label htmlFor="floral">Floral</label></li>
    <li><input type="checkbox" id="woody" name="woody" onChange={handleChange}/> <label htmlFor="woody">Woody</label></li>
    <li><input type="checkbox" id="fresh" name="fresh" onChange={handleChange}/> <label htmlFor="fresh">Fresh</label></li>
    <li><input type="checkbox" id="spicy" name="spicy" onChange={handleChange}/> <label htmlFor="spicy">Spicy</label></li>
    <li><input type="checkbox" id="opulent" name="opulent" onChange={handleChange}/> <label htmlFor="opulent">Opulent</label></li>
    <li><input type="checkbox" id="earthy" name="earthy" onChange={handleChange}/> <label htmlFor="earthy">Earthy</label></li>
    <li><input type="checkbox" id="herbaceous" name="herbaceous" onChange={handleChange}/> <label htmlFor="herbaceous">Herbaceous</label></li>
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
