import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

// 创建一个stroe对象
let store = createStore(reducers, applyMiddleware(ReduxThunk));

export default store;
