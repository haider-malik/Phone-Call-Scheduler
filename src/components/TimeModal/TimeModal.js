import React, { useState } from 'react';
import './timemodal.css';

const TimeModal = () => {
	const [info, setInfo] = useState({ name: '', phone: '' });
	return (
		<div className="modal_wrapper">
			<div className="modal_body">
				<div className="modal_header">
					<h2>Timings</h2>
					<button className="modal_close_btn">Close</button>
				</div>
				<form>
					<input type="text" name="name" id="name" />
					<input type="number" name="phone" id="phone" />
					<button type="submit">Update</button>
				</form>
			</div>
		</div>
	);
};

export default TimeModal;
