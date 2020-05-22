import axios from 'axios';
import {types} from './types';

export const fetchPosts = () => async (dispatch) => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
    dispatch({
      type: types.GET_POSTS,
      payload: res.data
    });
  } catch (e) {
    console.log(e);
  }
};