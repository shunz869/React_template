import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchLastest} from '../../actions/index';
import ProductList from '../productList';

class LastestOffer extends Component{
  componentDidMount(){
    this.props.fetchLastest();
  }

  render(){
    return (
      <div className="row">
        <ProductList items={this.props.lastest_items}/>
      </div>
    );
  };
}

const mapStateToProps =(state) => {
  return {lastest_items:Object.values(state.lastest_items),};
};
export default connect(mapStateToProps,{fetchLastest})(LastestOffer);