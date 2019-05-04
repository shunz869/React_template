import React, { Component } from 'react';
import ProductList from '../productList';

export default class CategoryOne extends Component{
  render(){
    return (
      <React.Fragment>
        <h4>this is the first product list</h4>
        <div className="row">
          <ProductList />
          <ProductList />
          <ProductList />
        </div>
      </React.Fragment>

    );
  };
}