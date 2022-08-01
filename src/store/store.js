import { compose, createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const middlWare = [logger];

const composedEnhancer = compose(applyMiddleware(...middlWare));

export const store = createStore(rootReducer, undefined, composedEnhancer);
