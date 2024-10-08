import React, { createContext, useEffect, useState } from "react";


export const ShopContext = createContext(null);

const getDefaultedCart = () => {
  let cart = {};
  for (let i = 0; i < 300 + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [all_products, setAllProducts] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultedCart());

  useEffect(() => {
    // Fetch all products
    fetch("http://localhost:4000/allproducts")
      .then((response) => response.json())
      .then((data) => setAllProducts(data));
  
    // Fetch cart items if user is authenticated
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/getcart", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "auth-token": `${localStorage.getItem("auth-token")}`,  // Corrected template literal
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}) // Use an empty JSON object if no body is needed
      })
        .then((response) => response.json())
        .then((data) => setCartItems(data));
    }
  }, []);
  

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      return { ...prev, [itemId]: (prev[itemId] || 0) + 1 };});
      if(localStorage.getItem("auth-token")){
        fetch("https://localhost:4000/addtocart",{
          method:"POST",
          headers:{
            Accept:"application/jsin",
            "auth-token" : `${localStorage.getItem("auth-token")}`,            
            "Content-Type":"application/json",
          },
          body: JSON.stringify({"itemId":itemId}),
        })
        .then((response)=>response.json())
        .then((data)=>console.log(data));
      }
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
