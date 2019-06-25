import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_STOCKS,
  STOCK_ERROR, 
  DELETE_STOCK,
  ADD_STOCK,
  GET_STOCK
} from './types';

// Get posts
export const getStocks = () => async dispatch => {
  try {
    const res = await axios.get('/api/stocks');

    dispatch({
      type: GET_STOCKS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: STOCK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

 
// Delete Stock
export const deleteStock = id => async dispatch => {
  try {
    await axios.delete(`/api/stocks/${id}`);

    dispatch({
      type: DELETE_STOCK,
      payload: id
    });

    dispatch(setAlert('Stock Removed', 'success'));
  } catch (err) {
    dispatch({
      type: STOCK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add post
export const addStock = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('/api/stocks', formData, config);

    dispatch({
      type: ADD_STOCK,
      payload: res.data
    });

    dispatch(setAlert('Stock Added', 'success'));
  } catch (err) {
    dispatch({
      type: STOCK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get post
export const getStock = id => async dispatch => {
  try {
    const res = await axios.get(`/api/stocks/${id}`);

    dispatch({
      type: GET_STOCK,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: STOCK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
 