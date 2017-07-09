import { combineReducers } from 'redux'
import tasks from './tasks';
import visibleFilter from './display';
import sortFilter from './sortFilter'

const rootReducer = combineReducers({tasks, visibleFilter, sortFilter});

export default rootReducer