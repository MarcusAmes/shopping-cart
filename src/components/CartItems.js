import React from 'react';
import CartItem from './CartItem'

function CartItems({cartItemsList}) {
  const cartItems = cartItemsList.map(cartItem => <CartItem key={cartItem.product.id} cartItem={cartItem}/>)
  return (
    <div className="container">
      <h1>Cart Items</h1>
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-md-8">Product</div>
            <div className="col-md-2">Price</div>
            <div className="col-md-2">Quantity</div>
          </div>
        </div>
        {cartItems}
      </div>
    </div>
  )
}

export default CartItems;
