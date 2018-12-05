import React, { Component } from 'react';

class AddItem extends Component{
  state={};

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onProductAdded(this.state)
  }

  render() {
    const {products} = this.props;

    const options = products.map(product => <option key={product.id} value={JSON.stringify(product)}> {product.name} </option>)

    return (
      <div className="container">
        <form onSubmit={ this.onSubmit } className="row">
          <div className="col-12">
            Quantity
          </div>
          <div className="col-12">
            <input onChange={ (e) => this.setState({quantity: Number(e.target.value)}) } type="number" name="quantity"/>
          </div>
          <div className="col-12">
            Products
          </div>
          <div className="col-12">
            <select onChange={ (e) => this.setState({product: JSON.parse(e.target.value) }) } name="product">
              {options}
            </select>
          </div>
          <button type="submit"> Add </button>
        </form>
      </div>
    )
  }
}

export default AddItem;
