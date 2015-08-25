import React from 'react';
import {load} from '../actions/productActions';
import ProductInfo from '../components/ProductInfo';

export default class Product {
  render() {
    return (
      <div>
        <ProductInfo />
      </div>
    );
  }

  static fetchData(dispatch) {
      return dispatch(load());
  }
}

