import React, { useEffect, useState } from 'react';
import './Home.scss';
import products from '../../constant/products';
import {BsChevronDown} from 'react-icons/bs';

const flatArray = Array.prototype.concat.apply([], 
  products.map((curElem) => curElem.tag ));

const obj =[... [... new Set(flatArray.map((elem) => elem)), 'All']
.filter(function (el) {
  return el != '';
})];

const Home = () => {
  const [items, setItems] = useState(products);
  const [toggle, setToggle] = useState(false);
  // const [searchTags , setSearchTags] = useState({tags: []});
  const [check, setCheck ] = useState(obj);
  // const lowTags = searchTags.tags;
  // console.log(lowTags)
  
  const onlyTag = ['tag'];
  
  const handleChange = (e) => {

    const { name, value, checked } = e.target;
    const lowerCaseTags = name.toLowerCase().trim();
    // console.log(lowerCaseTags)
   
    // const { tags } = searchTags;


    if (!checked || lowerCaseTags== 'all') {
      setItems(products);
      // setSearchTags({
      //   tags: tags.filter((e) => e !== name)
      // });
    }
  
    else {
      const filteredData = products.filter(tag => {
        return Object.keys(tag).some(key => {
          return onlyTag.includes(key) ? tag[key].toString().toLowerCase().includes(lowerCaseTags) : false;
        })
      });
      setItems(filteredData);
      // setSearchTags({
      //   tags: [...tags, name],
      // });
    }
  };
  // console.log(searchTags);
  // console.log(items);

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
    {check.map((el, i) => {
      return (
      <li key={i}><input type="checkbox" id={el} name={el} onChange={handleChange}/> <label htmlFor={el}>{el}</label></li>
      )
    })}
    </ul>
  }
    </div>

    <main>
    <div className='app__home-about'>
    <h2 className="app__home-headline">Formulations to instil aromatic quietude while stimulating senses. </h2>
    <p className="app__home-info">'Home is our emotional heartland,’ says globally revered designer Ilse Crawford. To complement this truth, Aesop offers a range of aromatic formulations that are practical and pleasing in equal measure.</p>
    </div>
    
    {items.map((index, key) => {
      return (
      <div className='app__home-products' key={key}>
      <div className='app__home-product'>
      <img src={index.imgUrl} alt="candle"/>
      <h4 className='app__home-product-heading'>{index.name}</h4>
      <p className='app__home-product-para'>{index.size ? `${index.size + ` /`}` : ''} {index.price}</p>
      <hr/>
      <p className='app__home-product-desc-title'><span>{index.detailsTitle}</span> {index.detailsInfo}</p>
      <hr/>
      <p className='app__home-product-desc'><span>{index.descriptionTitle}</span> {index.decriptionInfo}</p>
      <hr/>
      <p>{index.tag}</p>
      </div>
      <button type='button'>{index.availability=='1' ? 'Add to your cart - ' + `${index.price}`: 'Out of stock - ' + `${index.price}`}</button>
      </div>
    ) })}

    </main>
    </div>
  )
}

export default Home
