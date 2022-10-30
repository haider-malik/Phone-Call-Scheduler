import React from 'react';
import './timeslot.css';

const TimeSlot = ({ time, name, phone, color }) => {
	return (
		<div className="main" style={{ backgroundColor: color }}>
			<div className="time">{time}</div>
			<div className="details">
				<span className="name">
					<strong>{name && 'Name : '}</strong>
					{name}{' '}
				</span>
				<span className="phone">
					<strong>{phone && 'Phone : '}</strong>
					{phone}{' '}
				</span>
			</div>
		</div>
	);
};

export default TimeSlot;
