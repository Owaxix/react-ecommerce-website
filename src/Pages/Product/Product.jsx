import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext';


export const Product = () => {
  const {all_products} = useContext(ShopContext);
  return (
    <div>

    </div>
  )
}
export default Product;