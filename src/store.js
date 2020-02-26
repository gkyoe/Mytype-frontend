import { createStore, applyMiddleware } from 'redux';
import modules from './modules';

import ReduxThunk from 'redux-thunk';

const store = createStore(modules, applyMiddleware(ReduxThunk));

export default store;
