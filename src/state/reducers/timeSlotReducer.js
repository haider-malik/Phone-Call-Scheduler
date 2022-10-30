let timeSlots = [
	{
		time: '8 AM to 9 AM',
		startTime: 8,
		endTime: 9,
		name: 'Haider',
		phone: '8077957921',
		scheduled: false,
		color: 'whitesmoke',
	},
];

for (let i = 1; i < 12; i++) {
	const currStartTime = timeSlots[i - 1].startTime + 1;
	const currEndTime = timeSlots[i - 1].endTime + 1;
	let currTime =
		currStartTime <= 12 ? currStartTime + ' AM' : currStartTime - 12 + ' PM';

	currTime = currTime + ' to ';

	currTime =
		currTime +
		(currEndTime <= 12 ? currEndTime + ' AM' : currEndTime - 12 + ' PM');

	timeSlots.push({
		time: currTime,
		startTime: currStartTime,
		endTime: currEndTime,
		name: '',
		phone: '',
		scheduled: false,
		color: timeSlots[i - 1].color === 'white' ? 'whitesmoke' : 'white',
	});
}

const initialState = {
	currTimeSlot: null,
	timeSlots: timeSlots,
};

const reducer = (state = initialState, action) => {
	const newState = JSON.parse(JSON.stringify(state));
	if (action.type === 'setCurrTimeSlot') {
		if (action.payload == null) {
			newState.currTimeSlot = null;
			return newState;
		}
		newState.currTimeSlot = JSON.parse(JSON.stringify(action.payload));
		return newState;
	} else if (action.type === 'updateTimeSlot') {
		const id = action.payload.id;
		const data = action.payload.data;
		const updatedTimeSlot = JSON.parse(JSON.stringify(state.timeSlots[id]));
		newState.timeSlots[id] = {
			...updatedTimeSlot,
			name: data.name,
			phone: data.phone,
			scheduled: true,
		};
		return newState;
	} else if (action.type === 'unscheduleTimeSlot') {
		const id = action.payload.id;
		const updatedTimeSlot = JSON.parse(JSON.stringify(state.timeSlots[id]));
		newState.timeSlots[id] = {
			...updatedTimeSlot,
			name: '',
			phone: '',
			scheduled: false,
		};
		return newState;
	} else {
		return newState;
	}
};

export default reducer;
