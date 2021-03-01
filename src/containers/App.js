import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

import './App.css';

class App extends Component {
	// state no longer requires constructor() or super()
	state = {
		robots: [],
		searchField: ''
	};

	// runs when app loads
	async componentDidMount() {

		// making API call to JSON placeholder (users)
		const response = await fetch('https://jsonplaceholder.typicode.com/users');

		// must also await JSON conversion
		const users = await response.json();

		// setting the state
		this.setState({ robots: users});
	}

	// defining search change function
	onSearchChange = evt => {
		// update search field state based on entered text
		this.setState({ searchField: evt.target.value });
	};

	render() {
		const { robots, searchField } = this.state;

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
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<ErrorBoundary>
						<CardList robots={filteredRobots} />
					</ErrorBoundary>
				</Scroll>
			</div>
		);
	}
}

export default App;
