import { combineReducers } from 'redux';
import index from './diaries/index';
import top   from './top/app'
const rootReducer = combineReducers({
  index: index,
  top: top
});

export default rootReducer;
