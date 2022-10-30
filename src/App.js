import TimeSlot from './components/TimeSlot/TimeSlot';
import './app.css';
import { useEffect, useState } from 'react';
import TimeModal from './components/TimeModal/TimeModal';

function App() {
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
				<div className="today">{dateToday}</div>
			</nav>
			<main>
				<TimeSlot
					time={'8 AM to 9 AM'}
					name={'John Doe'}
					phone={'+91 8897651235'}
					color={'whitesmoke'}
				></TimeSlot>
				<TimeSlot
					time={'8 AM to 9 AM'}
					name={'John Doe'}
					phone={'+91 8897651235'}
					color={'white'}
				></TimeSlot>
				<TimeSlot
					time={'8 AM to 9 AM'}
					name={'John Doe'}
					phone={'+91 8897651235'}
					color={'whitesmoke'}
				></TimeSlot>
			</main>
		</section>
	);
}

export default App;
