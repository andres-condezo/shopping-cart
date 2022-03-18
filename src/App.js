import { Component } from 'react';
import Products from './components/Products'

class App extends Component {
  state = {
    products: [
      { name: 'Tomato', price: 1500, img: './products/tomato.jpg' },
      { name: 'Lentil', price: 2500, img: './products/lentil.jpg' },
      { name: 'Lettuce', price: 1500, img: './products/lettuce.jpg' },
    ]
  };

  render() {
    return (
      <div>
        <Products 
          addToShoppingCart={()=> console.log('add product')}
          products={this.state.products}
        />
      </div>
    )
  }
}

export default App;
