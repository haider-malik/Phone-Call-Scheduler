export const setCurrTimeSlot = (currTimeSlot) => {
	// console.log('Setting Curr Time Slot');
	return (dispatch) => {
		dispatch({ type: 'setCurrTimeSlot', payload: currTimeSlot });
	};
};

export const updateTimeSlot = (data) => {
	return (dispatch) => {
		dispatch({ type: 'updateTimeSlot', payload: data });
	};
};

export const unscheduleTimeSlot = (startTime) => {
	return (dispatch) => {
		dispatch({ type: 'unscheduleTimeSlot', payload: { startTime } });
	};
};
