import React, { Component } from 'react';
import ProductList from '../productList';

export default class LastestOffer extends Component{
  render(){
    return (
      <div className="row">
        <ProductList />
        <ProductList />
        <ProductList />
      </div>
    );
  };
}