import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// root-reducer
import { rootReducer } from './root-reducer';

// const middlewares = [logger];
const middlewares = [];

const composeEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, composeEnhancers);
