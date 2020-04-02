import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const middleWares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middleWares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleWares));
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
