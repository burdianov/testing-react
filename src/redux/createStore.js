import {applyMiddleware, createStore} from 'redux';
import reduxThunk from 'redux-thunk';

import rootReducer from './reducers';

export const middlewares = [reduxThunk];

export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export const store = createStoreWithMiddleware(rootReducer);