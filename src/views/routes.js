import Home from 'views/screens/home/Home';
import About from 'views/screens/about/About';
import React from 'react';
import {Router, Route} from 'react-router';

/**
 * The React Router 1.0 routes for both the server and the client.
 */
export default (
	<Router>
		<Route path="/" component={Home} />
		<Route path="/about" component={About} />
	</Router>
);
