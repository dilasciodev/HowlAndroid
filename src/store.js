import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { autoRehydrate } from 'redux-persist';
import reducers from './reducers';

const middlewares = [];


  middlewares.push(createLogger());


export default createStore(
  reducers,
  undefined,
  composeWithDevTools(applyMiddleware(...middlewares), autoRehydrate()),
);
