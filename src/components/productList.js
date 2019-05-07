import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class ProductList extends Component{
  renderList = () =>{
    if (!this.props.items){
      return <div>Loading</div>
    };
    const divStyle = {
      border:0
    };
    const divStyle2 = {
      paddingLeft:0
    };
    return this.props.items.map(item => {
      return(
        <div className="col-12 col-md-4 col-lg-4" key={item._id}>
          <div className="card "  style={divStyle}>
            <Link to={`/home/${item._id}`}>
              <img src={item.img} className="img-fluid" alt="124" />
            </Link> 
            <div className="card-body" style={divStyle2}>
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">
                <small className="text-muted">{item.description}</small>
              </p>
              <h6 className="card-text">{item.price}</h6>
            </div>
          </div>
        </div>
      );
    });
  }
  render(){
    return (
      <React.Fragment>
      {this.renderList()}
      </React.Fragment>
    );
  };
}