import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ganttReducer from './gantt'


const rootReducer = combineReducers({
	gantt: ganttReducer
});

export function createStore() {
	return configureStore({
		reducer: rootReducer
	});
}