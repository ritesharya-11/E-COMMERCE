import React, { useContext } from 'react'
import { ShopContext } from '../context/Context'

const LatestCollection = () => {

    const {product} = useContext(ShopContext);

    console.log(product);
    
  return (

    
    <div>

    </div>
  )
}

export default LatestCollection