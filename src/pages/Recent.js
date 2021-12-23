import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Recent = () => {
	const history = useSelector((state) => state.history);

	return (
		<div className="recent-page">
			<Link to="/" className="link">
				Back
			</Link>
			<h1 className="heading">Recent Calculations History</h1>
			<div className="recent-body">
				{history.map((calculation, key) => (
					<div className="recent-box" key={key}>
						<div className="recent-expression">
							{calculation.expression}
						</div>
						<div className="recent-result">
							{calculation.results}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Recent;
