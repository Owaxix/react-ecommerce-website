import React from "react";
import "./ProductDisplay.css";
import starIcon from "../Assets/star_icon.png";
import starDullIcon from "../Assets/star_dull_icon.png";
const ProductDisply = (props) => {
  const { product } = props;
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="NOT FOUND" />
          <img src={product.image} alt="NOT FOUND" />
          <img src={product.image} alt="NOT FOUND" />
          <img src={product.image} alt="NOT FOUND" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={starIcon} alt="NOT FOUND" />
          <img src={starIcon} alt="NOT FOUND" />
          <img src={starIcon} alt="NOT FOUND" />
          <img src={starIcon} alt="NOT FOUND" />
          <img src={starIcon} alt="NOT FOUND" />
          <img src={starDullIcon} alt="NOT FOUND" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          A lightweight, usually knitted, pullover shirt, close fitting, with a
          round neckline and short sleeves worn as an undershirt or outer
          garment
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button>Add To Cart</button>
        <p className="productdisplay-right-category">
          <span>Category: </span> Women, T-Shirt, Croptop
        </p>
        <p className="productdisplay-right-category">
          <span>Tags: </span> Latest, Modern
        </p>
      </div>
    </div>
  );
};

export default ProductDisply;
