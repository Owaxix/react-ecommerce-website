import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <h3>Welcome to OutfitAura - Your Ultimate Fashion Destination</h3>
        <p>
          At OutfitAura, we bring the latest trends and timeless styles directly
          to your wardrobe. Whether you're searching for elegant dresses,
          stylish men’s outfits, or adorable kids' clothing, our extensive
          collection has something for everyone. We pride ourselves on offering
          high-quality products that seamlessly combine fashion with comfort,
          ensuring you look and feel your best every day.
        </p>
        <p>
          From chic women’s wear to sharp men’s suits and the cutest kids'
          outfits, OutfitAura has it all. Our user-friendly shopping experience,
          secure payment options, and fast delivery make online shopping a
          breeze. Plus, our dedicated customer service team is always here to
          assist you with any questions or needs. Join our fashion-forward
          community and stay ahead of the trends with OutfitAura. Happy
          shopping!
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox