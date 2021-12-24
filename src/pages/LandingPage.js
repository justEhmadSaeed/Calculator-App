import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
	return (
		<div id="landing-page">
			<h1 className="heading">A Calculator App</h1>
			<p className="heading">
				Calculator provides simple and advanced mathematical
				functions in a beautifully designed app. • Perform
				basic calculations such as addition, subtraction,
				multiplication and division.
			</p>
			<div className="links-block">
				<Link to="/calculator">Calculator App</Link>
				<Link to="/recent">Recent History</Link>
			</div>
		</div>
	);
};

export default LandingPage;
