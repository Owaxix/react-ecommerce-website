import React, { createContext, useState } from "react";
import all_products from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultedCart = () => {
  let cart = {};
  for (let i = 0; i < all_products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultedCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      return { ...prev, [itemId]: (prev[itemId] || 0) + 1 };
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      return { ...prev, [itemId]: (prev[itemId] || 0) - 1 };
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let iteminfo = all_products.find(
          (product) => product.id === Number(item)
        );
        totalAmount += iteminfo.new_price * cartItems[item];
      }
    }
    return totalAmount; 
  };

  const getTotalCartItem = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };
  const contextValue = {
    getTotalCartItem,
    getTotalCartAmount,
    all_products,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
