import React from 'react'
import './Offers.css';
import exclusive from '../Assets/exclusive_image.png';
export const Offers = () => {
  return (
    <div className="offers">
      <div className="OfferLeft">
        <h1>Exclusive</h1>
        <h1>Offer For You</h1>
        <p>ONLY ON BEST SELLER PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="OffersRight">
        <img src={exclusive} alt="" />
      </div>
    </div>
  );
}
export default Offers;