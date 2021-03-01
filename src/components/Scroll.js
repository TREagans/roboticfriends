import React from 'react';

// every React component automatically has access
// to children, even if you sisn't pass any props
const Scroll = props => {
	return (
		<div style={{ overflowY: 'scroll', border: '1px solid black', height: '800px' }}>
			{props.children}
		</div>
	);
};

export default Scroll;
