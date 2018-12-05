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
    let newList = JSON.parse(JSON.stringify(this.state.cartItemsList));
    for(let i = 0; i < newList.length; i++) {
      // console.log(this.state.cartItemsList[i].product.id);
      if(newList[i].product.id === product.product.id) {
        let updated = newList[i]
        updated.quantity += Number(product.quantity)
        newList.splice(i,1, updated)
        this.setState(prevState => (
          {cartItemsList: newList}
        ))
        isAlready = true;
        return;
      }
    }
    if(!isAlready) {
      this.setState(prevState => (
        {cartItemsList: prevState.cartItemsList.concat([product])}
      ))
    }
  }

  render() {
    return (
      <div className="App">
        <TopNav />
        <CartItems cartItemsList={this.state.cartItemsList}/>
        <AddItems products={this.state.products} onProductAdded={this.addProduct} />
        <CartFooter copyright={'2016'}/>
      </div>


      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
