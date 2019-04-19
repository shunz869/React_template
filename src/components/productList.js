import React, { Component } from 'react';

export default class ProductList extends Component{
  render(){
    return (
      <div className="col-12 col-md-4 col-lg-4">
        <div className="card">
          <img src="https://via.placeholder.com/350x400" className="img-fluid" alt="124" />
          <div className="card-body">
            <h5 className="card-title">Product Name</h5>
            <p className="card-text">
              <small className="text-muted">nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi proin sed libero enim sed faucibus</small>
            </p>
            <h6 className="card-text">Price</h6>
          </div>
        </div>
      </div>
    );
  };
}