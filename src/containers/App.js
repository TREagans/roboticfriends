
import React, { useState, useEffect } from 'react';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

import './App.css';

const App = () => {

	// hook state
	const [robots, setRobots] = useState([]);
	const [searchField, setSearchField] = useState('');


	// useEffect is used in place of lifecycle methods
	// notice how we create an async function w/in then called
	useEffect(() => {

		const fetchBots = async () => {

			// making API call to JSON placeholder (users)
			const response = await fetch('https://jsonplaceholder.typicode.com/users');

			// must also await JSON conversion
			const users = await response.json();

			// setting the state
			setRobots(users);
		}

		// call the fetchBots function
		fetchBots();

	}, []);

	// defining search change function
	const onSearchChange = evt => {

		// update search field state based on entered text
		setSearchField(evt.target.value);
	};


	// filter the robots based on search field text
	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchField.toLowerCase());
	});

	// if load time takes long, display loading
	return !robots.length ? (
		<h1 className='tc'>Loading . . .</h1>
	) : (
		<div className='tc'>
			<h1 className='f1'>Robotic Friends</h1>
			<SearchBox searchChange={onSearchChange} />
			<Scroll>
				<ErrorBoundary>
					<CardList robots={filteredRobots} />
				</ErrorBoundary>
			</Scroll>
		</div>
	);
}

export default App;
