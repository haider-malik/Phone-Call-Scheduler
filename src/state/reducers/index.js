import { combineReducers } from 'redux';
import TimeSlotReducer from './timeSlotReducer';

const reducers = combineReducers({
	timeSlotsData: TimeSlotReducer,
});

export default reducers;
