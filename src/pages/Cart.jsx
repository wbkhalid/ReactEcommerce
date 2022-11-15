import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cartContext'

const Cart = () => {
  const {cart}= useCartContext()
 
  return (
   <Wrapper>

<div className="container">
  <div className="cart-heading grid grid-five--column">
    <p>item</p>
    <p>price</p>
    <p>quantity</p>
    <p>subtotal</p>
    <p>remove</p>
  </div>
  <hr />
</div>
   </Wrapper>
  )
}

const Wrapper =styled.section`
padding: 5rem 0;

.cart-heading{
  text-transform: capitalize;
  text-align: center;
  p{

    font-weight: bold;
  }
}

hr{
  margin: 2rem 0;
}
  
`
export default Cart