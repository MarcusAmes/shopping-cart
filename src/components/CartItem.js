import React, { Component } from 'react';

class CartItem extends Component{
  render() {
    const {product: {name, priceInCents}, quantity} = this.props.cartItem;
    return (
      <div class="list-group-item">
        <div class="row">
          <div class="col-md-8">{name}</div>
          <div class="col-md-2">{priceInCents}</div>
          <div class="col-md-2">{quantity}</div>
        </div>
    </div>
    )
  }
}

export default CartItem;