import { combineReducers } from 'redux';
import rootReducer from './reducers/index';
  
const store = combineReducers(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());
  
export default store;