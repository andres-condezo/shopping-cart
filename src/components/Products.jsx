import { Component } from 'react';
import Product from './Product';

class Products extends Component {
  render() {
    const { products, addToShoppingCart } = this.props
    return (
      <div>
        { products.map(product => 
        <Product
          addToShoppingCart={addToShoppingCart}
          key={product.name}
          product={product}
        />) }
      </div>
    )
  }
}

export default Products;
