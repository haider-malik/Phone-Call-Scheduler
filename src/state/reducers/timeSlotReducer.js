let timeSlots = [
	{
		time: '8 AM to 9 AM',
		startTime: 8,
		endTime: 9,
		name: '',
		phone: '',
		scheduled: false,
		color: 'whitesmoke',
	},
];

for (let i = 1; i < 12; i++) {
	const currStartTime = timeSlots[i - 1].startTime + 1;
	const currEndTime = timeSlots[i - 1].endTime + 1;
	let currTime =
		currStartTime < 12
			? currStartTime + ' AM'
			: (currStartTime > 12 ? currStartTime - 12 : currStartTime) + ' PM';

	currTime = currTime + ' to ';

	currTime =
		currTime +
		(currEndTime < 12
			? currEndTime + ' AM'
			: (currEndTime > 12 ? currEndTime - 12 : currEndTime) + ' PM');

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
		const data = action.payload;
		const id =
			data.startTime >= 8 ? data.startTime - 8 : data.startTime + 12 - 8;
		const updatedTimeSlot = JSON.parse(JSON.stringify(state.timeSlots[id]));

		let newColor = updatedTimeSlot.color;
		if (newColor === 'white' || newColor === 'whitesmoke') {
			newColor = updatedTimeSlot.color === 'white' ? '#e6f4fc' : '#a1e4ff';
		}

		newState.timeSlots[id] = {
			...updatedTimeSlot,
			name: data.name,
			phone: data.phone,
			scheduled: true,
			color: newColor,
		};
		return newState;
	} else if (action.type === 'unscheduleTimeSlot') {
		const data = action.payload;
		const id =
			data.startTime >= 8 ? data.startTime - 8 : data.startTime + 12 - 8;

		const updatedTimeSlot = JSON.parse(JSON.stringify(state.timeSlots[id]));
		newState.timeSlots[id] = {
			...updatedTimeSlot,
			name: '',
			phone: '',
			scheduled: false,
			color: updatedTimeSlot.color === '#e6f4fc' ? 'white' : 'whitesmoke',
		};
		return newState;
	} else {
		return newState;
	}
};

export default reducer;
