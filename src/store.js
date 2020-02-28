import { createStore, applyMiddleware } from 'redux';
import modules from './modules'; //index.js 파일 모듈을 한꺼번에 불러올 수 있도록

import ReduxThunk from 'redux-thunk';

const store = createStore(modules, applyMiddleware(ReduxThunk));

export default store;
