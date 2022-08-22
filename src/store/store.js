import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { logger } from 'redux-logger';

// import thunk from 'redux-thunk';

import { rootReducer } from './root-reducer';

import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const middleWares = [logger, sagaMiddleware];
const composedEnhansers = compose(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhansers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

// const loggerMiddleware = (store) => (next) => (action) => {
//   if (!action.type) {
//     return next(action);
//   }

//   console.log('type: ', action.type);
//   console.log('payload: ', action.payload);
//   console.log('currentState: ', store.getState());

//   next(action);

//   console.log('next state: ', store.getState());
// };
