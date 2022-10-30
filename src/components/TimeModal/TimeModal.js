import React, { useState } from 'react';
import './timemodal.css';

const TimeModal = () => {
	const [info, setInfo] = useState({ name: '', phone: '' });

	const infoChange = (e) => {
		setInfo({ ...info, [e.target.name]: e.target.value });
	};

	return (
		<div className="modal_wrapper active">
			<div className="modal_body">
				<div className="modal_header">
					<h2>Timings</h2>
					<button className="modal_close_btn">×</button>
				</div>
				<form className="modal_form">
					<input
						placeholder="Name"
						type="text"
						name="name"
						id="name"
						value={info.name}
						onChange={infoChange}
					/>
					<input
						placeholder="Phone"
						type="number"
						name="phone"
						id="phone"
						value={info.phone}
						onChange={infoChange}
					/>
					<button type="submit" className="updateBtn">
						Update
					</button>
				</form>
			</div>
		</div>
	);
};

export default TimeModal;
