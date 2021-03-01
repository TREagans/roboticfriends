import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {

	// mapping to a variable
	const cardsArray = robots.map((robot, idx) => {
		return (
			<Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
		);
	});

	return <div>{cardsArray}</div>;
};

export default CardList;
