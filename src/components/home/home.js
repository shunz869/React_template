import React, { Component } from 'react';
import Carousel from './carousel';
import LastestOffer from './lastestOffer';
import PreOrder from './preOrder';
import Hot from './hot';

export default class Home extends Component{
  render(){
    let divStyle={
      marginTop:70,
      marginBottom:45
    };
    return (
      <React.Fragment>
        <Carousel />
        <div className="container" style={divStyle} >
          <h4 style={divStyle}>Lastest Offer</h4>
          <LastestOffer />
          <div className="row" style={divStyle}>
            <PreOrder  divStyle={divStyle}/>
            <Hot />
          </div>
        </div>
      </React.Fragment>
    );
  };
}