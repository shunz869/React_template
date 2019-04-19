import React, { Component } from 'react';
import ProductList from '../productList';

export default class CategoryOne extends Component{
  render(){
    return (
      <div className="row">
        this is the first product list
        <ProductList />
        <ProductList />
      </div>
    );
  };
}