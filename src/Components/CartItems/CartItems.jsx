import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../../Components/Assets/cart_cross_icon.png";

const CartItems = () => {
  const { getTotalCartAmount, all_products, cartItems, removeFromCart } =
    useContext(ShopContext);

  return (
    <div className="cartitems ">
      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_products.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <React.Fragment key={e.id}>
              <div className="cartitems-format cartitems-format-main">
                <img className="cartitems-icon" src={e.image} alt="" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className="cartitems-remove"
                  src={remove_icon}
                  onClick={() => removeFromCart(e.id)}
                  alt="Remove"
                />
              </div>
              <hr />
            </React.Fragment>
          );
        }
        return null; // Return null if the condition is not met
      })}

      <div className="cartItem-down"></div>
      <div className="cartItemTotal">
        <h1>Cart Total</h1>
        <div>
          <div className="cartItem-Total-Item">
            <p>SubTotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cartItem-Total-Item">
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="cartItem-Total-Item">
            <h3>Total</h3>
            <h3>${getTotalCartAmount()}</h3>
          </div>
          <button>Checkout</button>
        </div>
        <div className="catItem-Promocode">
          <p>If you have Promo code, Enter it here</p>
          <div className="cartItem-promobox">
            <input type="text" placeholder="Promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
