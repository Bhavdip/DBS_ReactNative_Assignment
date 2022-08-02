import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import { combinedReducers } from './reducers';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(
    applyMiddleware(...middlewares)
    // other store enhancers
);

const globalStore = createStore(combinedReducers, enhancers);

sagaMiddleware.run(rootSaga);

export default globalStore;
