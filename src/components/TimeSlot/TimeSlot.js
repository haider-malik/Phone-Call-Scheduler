import React from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../../state/index';
import './timeslot.css';

const TimeSlot = ({ timeSlotData }) => {
	const dispatch = useDispatch();

	return (
		<div
			className="main"
			style={{ backgroundColor: timeSlotData.color }}
			onClick={() => {
				dispatch(actionCreators.setCurrTimeSlot(timeSlotData));
			}}
		>
			<div className="time">{timeSlotData.time}</div>
			<div className="details">
				<span className="name">
					<strong>
						{timeSlotData.scheduled ? (
							'Name : '
						) : (
							<span
								style={{
									color: 'grey',
								}}
							>
								Unscheduled
							</span>
						)}
					</strong>
					{timeSlotData.name}{' '}
				</span>
				<span className="phone">
					<strong>{timeSlotData.phone && 'Phone : '}</strong>
					{timeSlotData.phone}{' '}
				</span>
			</div>
		</div>
	);
};

export default TimeSlot;
