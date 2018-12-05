import React, { Component } from 'react';

class CartItem extends Component{
  render() {
    const {product: {name, priceInCents}, quantity} = this.props.cartItem;
    return (
      <div className="list-group-item">
        <div className="row">
          <div className="col-md-8">{name}</div>
          <div className="col-md-2">${priceInCents/100}</div>
          <div className="col-md-2">{quantity}</div>
        </div>
    </div>
    )
  }
}

export default CartItem;
