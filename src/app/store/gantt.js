import { createSlice } from '@reduxjs/toolkit'
import ganttService from '../service/gantt_data.service'
import { gantt_data } from '../utils/gantt_data'

const ganttSlice = createSlice({
	name: 'gantt',
	initialState: {
		entities: null,
		isLoading: true,
		error: null
	},
	reducers: {
		ganttRequested: state => {
			state.isLoading = true;
		},
		ganttReceived: (state, action) => {
			state.entities = action.payload;
			state.isLoading = false;
		},
		ganttRequestedFailed: (state, action) => {
			state.error = action.payload;
			state.isLoading = false;
		}
	}
});

const {reducer: ganttReducer, actions} = ganttSlice;
const {ganttRequested, ganttReceived, ganttRequestedFailed} = actions;

export const loadGanttData = () => async (dispatch) => {
	dispatch(ganttRequested());
	try {
		// запутался с cors. на сколько понял необходимо
		// со стороны сервера добавить правило с заголовками
		// функционал написан, но вручную передал данные с db.json
		// const { content } = await ganttService.get();
		dispatch(ganttReceived(gantt_data));
	} catch (error) {
		dispatch(ganttRequestedFailed(error.message));
	}
}

export const getGanttData = () => state => state.gantt.entities;
export const getGanttLoadingStatus = () => state => state.gantt.isLoading

export default ganttReducer;