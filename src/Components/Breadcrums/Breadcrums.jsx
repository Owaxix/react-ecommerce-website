import React from 'react';
import './Breadcrums.css'
import arrowIcon from "../Assets/breadcrum_arrow.png";

const Breadcrums = (props) => {
    const {product} = props;


  return (
    <div className='breadcrums'>
        Home <img src={arrowIcon} alt="NOT FOUND" />
        Shop <img src={arrowIcon} alt="NOT FOUND" />
        {product.category}
        <img src={arrowIcon} alt="NOT FOUND" />
        {product.name}
    </div>
  )
}

export default Breadcrums