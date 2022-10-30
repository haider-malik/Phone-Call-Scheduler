import React from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../../state/index';
import './timeslot.css';

const TimeSlot = ({ data }) => {
	const dispatch = useDispatch();

	return (
		<div
			className="main"
			style={{ backgroundColor: data.color }}
			onClick={() => {
				dispatch(actionCreators.setCurrTimeSlot(data));
			}}
		>
			<div className="time">{data.time}</div>
			<div className="details">
				<span className="name">
					<strong>{data.name && 'Name : '}</strong>
					{data.name}{' '}
				</span>
				<span className="phone">
					<strong>{data.phone && 'Phone : '}</strong>
					{data.phone}{' '}
				</span>
			</div>
		</div>
	);
};

export default TimeSlot;
