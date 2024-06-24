import React from 'react'
import { useCart } from '../context/Cart';

const Item = (props) => {
    const cart = useCart();
    console.log(cart);

  return (
    <div className='item-card'>
        <h4>Name: {props.name}</h4>
        <p>Price: {props.price}</p>
        <button onClick={() => cart.setItems([...cart.items, {name: props.name, price:props.price}])}>Add to cart</button>
    </div>
  )
}

export default Item