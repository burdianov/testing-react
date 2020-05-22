import postsReducer from './reducer';
import {types} from '../../actions/types';

describe('Posts Reducer', () => {
  it('should return default state', () => {
    const newState = postsReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it('should return new state if receiving type', () => {
    const posts = [
      {title: 'Test 1'},
      {title: 'Test 2'},
      {title: 'Test 3'}
    ];
    const newState = postsReducer(undefined, {
      type: types.GET_POSTS,
      payload: posts
    });
    expect(newState).toEqual(posts);
  });
});