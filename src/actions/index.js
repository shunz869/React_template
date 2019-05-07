import fetchData from './fetchData';

export const FETCH_LASTESTS = 'FETCH_LASTESTS';
export const FETCH_LITEM = 'FETCH_LITEM';


export const fetchLastest = () => async dispatch => {
  const response = await fetchData.get('/lastestsItem');
  dispatch({
    type:FETCH_LASTESTS,
    payload:response.data
  });
};

export const fetchLItem = _id => async dispatch => {
  const response = await fetchData.get(`/lastestsItem/${_id}`);
  dispatch({
    type:FETCH_LITEM,
    payload:response.data
  });
};

