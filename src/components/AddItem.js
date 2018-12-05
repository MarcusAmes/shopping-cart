import React, { Component } from 'react';

class AddItem extends Component{
  render() {
    const {products} = this.props;

    const options = products.map(product => <option value={product.name}> {product.name} </option>)

    return (
      <div className="container">
        <form className="row">
          <div className="col-12">
            Quantity
          </div>
          <div className="col-12">
            <input type="number" name="quantity"/>
          </div>
          <div className="col-12">
            Products
          </div>
          <div className="col-12">
            <select name="product">
              {options}
            </select>
          </div>
        </form>
      </div>
    )
  }
}

export default AddItem;
