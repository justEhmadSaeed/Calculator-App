import 'App.css';
import React from 'react';
import Calculator from 'pages/Calculator';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';
import LandingPage from 'pages/LandingPage';
import Recent from 'pages/Recent';
const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/calculator" element={<Calculator />} />
				<Route path="/recent" element={<Recent />} />
				{/* Default Route */}
				<Route path="/*" element={<LandingPage />} />
			</Routes>
		</Router>
	);
};
export default App;
