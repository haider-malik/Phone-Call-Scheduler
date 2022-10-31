import TimeSlot from './components/TimeSlot/TimeSlot';
import './app.css';
import { useEffect, useState } from 'react';
import TimeModal from './components/TimeModal/TimeModal';
import { useSelector } from 'react-redux';

function App() {
	const { timeSlots } = useSelector((state) => state.timeSlotsData);
	const [dateToday, setDateToday] = useState(null);

	useEffect(() => {
		let currDate = new Date(Date.now());
		currDate = currDate.toDateString();
		setDateToday(currDate);
	}, [dateToday]);

	return (
		<section className="wrapper">
			<section className="updateModal">
				{' '}
				<TimeModal />{' '}
			</section>
			<nav className="nav">
				<h1 className="heading">Phone Call Scheduler</h1>
				<div className="today_wrapper">
					<div className="today">{dateToday}</div>
				</div>
			</nav>
			<main>
				{timeSlots.map((timeSlot, idx) => {
					return (
						<TimeSlot key={idx} timeSlotData={timeSlot} id={idx}></TimeSlot>
					);
				})}
			</main>
		</section>
	);
}

export default App;
