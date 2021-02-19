import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import AuthMiddleware from '../middlewares/api.auth';

import reducer from '../reducers';

const Store = createStore(reducer, composeWithDevTools(
  applyMiddleware(AuthMiddleware),
));

export default Store;
