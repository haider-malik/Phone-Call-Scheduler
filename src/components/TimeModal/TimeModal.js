import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../../state/index';
import './timemodal.css';

const TimeModal = () => {
	const ref = useRef();
	const nameRef = useRef();

	const dispatch = useDispatch();
	const { currTimeSlot } = useSelector((state) => state.timeSlotsData);
	const [info, setInfo] = useState({
		name: currTimeSlot ? currTimeSlot.name : '',
		phone: currTimeSlot ? currTimeSlot.phone : '',
	});

	useEffect(() => {
		nameRef.current.focus();
		setInfo({
			name: currTimeSlot ? currTimeSlot.name : '',
			phone: currTimeSlot ? currTimeSlot.phone : '',
		});
	}, [currTimeSlot]);

	const infoChange = (e) => {
		setInfo({ ...info, [e.target.name]: e.target.value });
	};

	const updateTimeSlot = (e) => {
		if (info.name === '' && info.phone === '') {
			ref.current.click();
			dispatch(actionCreators.unscheduleTimeSlot(currTimeSlot.startTime));
			return;
		}
		if (info.name === '' || info.phone === '') {
			return alert(
				"Name and Phone Number Can't be empty. To unschedule, leave both Name and Phone Number fields Empty"
			);
		}
		ref.current.click();
		dispatch(
			actionCreators.updateTimeSlot({
				startTime: currTimeSlot.startTime,
				name: info.name,
				phone: info.phone,
			})
		);
	};

	const closeModal = () => {
		dispatch(actionCreators.setCurrTimeSlot(null));
	};

	return (
		<div className={`modal_wrapper ${currTimeSlot && 'active'}`}>
			<div className="modal_body">
				<div className="modal_header">
					<h2>{currTimeSlot && currTimeSlot.time}</h2>
					<button className="modal_close_btn" onClick={closeModal} ref={ref}>
						×
					</button>
				</div>
				<form className="modal_form" onSubmit={(e) => e.preventDefault()}>
					<input
						placeholder="Name"
						type="text"
						name="name"
						id="name"
						value={info.name}
						ref={nameRef}
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
					<button type="submit" className="updateBtn" onClick={updateTimeSlot}>
						Update
					</button>
				</form>
			</div>
		</div>
	);
};

export default TimeModal;
