import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchLItem} from '../../actions/index';

class LastestItem extends Component{
  componentDidMount(){
    this.props.fetchLItem(this.props.match.params._id);
  };

  render(){
    if(!this.props.item){
      return <div>Loading</div>
    }
    return(
      <div>{this.props.item._id}
      </div>
    );
  };
};

const mapStateToProps=(state,ownProps) => {
  console.log(ownProps)
  return {
    item: state.lastest_items[ownProps.match.params._id],
  }
};

export default connect(mapStateToProps,{fetchLItem})(LastestItem);
