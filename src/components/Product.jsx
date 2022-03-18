import { Component } from 'react';

class Product extends Component {
  render() {
    console.log(this.props);
    return (
      <p>Item</p>
    )
  }
}

export default Product;
