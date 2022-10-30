import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../../state/index';
import './timemodal.css';

const TimeModal = () => {
	const dispatch = useDispatch();
	const { currTimeSlot } = useSelector((state) => state.timeSlotsData);

	const infoChange = (e) => {
		dispatch(
			actionCreators.setCurrTimeSlot({
				...currTimeSlot,
				name: e.target.value,
				phone: e.target.phone,
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
					<button className="modal_close_btn" onClick={closeModal}>
						×
					</button>
				</div>
				<form className="modal_form">
					<input
						placeholder="Name"
						type="text"
						name="name"
						id="name"
						value={currTimeSlot !== null ? currTimeSlot.name : ''}
						onChange={infoChange}
					/>
					<input
						placeholder="Phone"
						type="number"
						name="phone"
						id="phone"
						value={currTimeSlot !== null ? currTimeSlot.phone : ''}
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
