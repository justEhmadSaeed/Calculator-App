import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
	return (
		<div id="landing-page">
			<div>
				<h1 className="heading">A Calculator App</h1>
				<p className="heading">
					Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Animi officiis enim temporibus suscipit vel,
					ut illo voluptates, minima at quidem dolor
					repellat aut? Tempora, ducimus mollitia! Aliquam
					mollitia earum quos.
				</p>
			</div>
			<div className="links-block">
				<Link to="/calculator">Calculator App</Link>
				<Link to="/recent">Recent History</Link>
			</div>
		</div>
	);
};

export default LandingPage;
