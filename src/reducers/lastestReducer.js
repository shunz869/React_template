import{FETCH_LASTESTS,FETCH_LITEM} from '../actions/index';
import _ from 'lodash';

export default (state={},action) => {
  switch(action.type){
    case FETCH_LASTESTS:
      return {...state, ..._.mapKeys(action.payload, '_id')};
    case FETCH_LITEM:
      return {...state,[action.payload._id]:action.payload};
    default:
      return state;
  };
};