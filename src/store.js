import {createStore,applyMiddleware,compose} from 'redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import watcherSaga from  './jobPortalSaga';
const saga=createSagaMiddleware();

const store=createStore(reducer,composeWithDevTools(applyMiddleware(saga)));

saga.run(watcherSaga);

export {store};



