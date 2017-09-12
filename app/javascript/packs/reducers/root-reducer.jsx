import { combineReducers } from 'redux';
import index from './diaries/index';
const rootReducer = combineReducers({
  index: index,
});

export default rootReducer;
