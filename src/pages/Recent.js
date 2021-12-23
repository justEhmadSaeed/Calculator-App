import React from 'react';
import { Link } from 'react-router-dom';

const Recent = () => {
	return (
		<div className="recent-page">
			<Link to="/" className="link">
				Back
			</Link>
			<h1 className="heading">Recent Calculations History</h1>
		</div>
	);
};

export default Recent;
