import React from 'react';

const Header = ({ searchChange }) => {
  
	return (
		<div className='pa2'>
			<input
				className='pa3 bg-lightest-blue'
				type='search'
				placeholder='search bots'
				onChange={searchChange}
			/>
		</div>
	);
};

export default Header;
