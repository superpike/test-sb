import { createStore, combineReducers, applyMiddleware } from 'redux';

// Middleware
// import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

import { fundsReducer } from './reducers/fundsReducer';

// Reducers
const reducers = combineReducers({
  funds: fundsReducer,
  form: formReducer,
});

// const middleware = applyMiddleware(promise, logger, thunk);
const middleware = applyMiddleware(promise, thunk);

const store = createStore(reducers, middleware);

export default store;
