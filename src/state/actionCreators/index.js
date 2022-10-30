export const setCurrTimeSlot = (currTimeSlot) => {
	// console.log('Setting Curr Time Slot');
	return (dispatch) => {
		dispatch({ type: 'setCurrTimeSlot', payload: currTimeSlot });
	};
};

export const updateTimeSlot = (id, data) => {
	return (dispatch) => {
		dispatch({ type: 'updateTimeSlot', payload: { id, data } });
	};
};

export const upscheduleTimeSlot = (id) => {
	return (dispatch) => {
		dispatch({ type: 'updateTimeSlot', payload: { id } });
	};
};
