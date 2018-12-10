import React, { Component } from 'react';
import './App.css';
import TopNav from './components/TopNav'
import CartFooter from './components/CartFooter'
import CartItems from './components/CartItems'
// import GetTotal from './components/GetTotal'
import AddItems from './components/AddItem'

class App extends Component {
  state = {
    products: [
      { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
      { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
      { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
      { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
      { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
      { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
      { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
      { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
      { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
    ],
    cartItemsList: [
      { product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ]
  }

  addProduct = (product) => {
    let isAlready = false;
    const newList = this.state.cartItemsList.map(item => {
      if ( product.product.id === item.product.id ) {
        isAlready = true;
        return { ...item, quantity: item.quantity + Number(product.quantity)}
      } else {
        return item
      }
    })
    if (isAlready) {
      this.setState({cartItemsList: newList})
    } else {
      this.setState((prevState)=> ({ cartItemsList: [...newList, product] }))
    }
  }

  render() {
    const total = this.state.cartItemsList.reduce((acc, item) => {
      return acc + (item.quantity * item.product.priceInCents)
    }, 0)/100

    return (
      <div className="App">
        <TopNav />
        <CartItems cartItemsList={this.state.cartItemsList}/>
        <div className="container">Total Price: ${total}</div>
        <AddItems products={this.state.products} onProductAdded={this.addProduct} />
        <CartFooter copyright={'2016'}/>
      </div>
    );
  }
}

export default App;
