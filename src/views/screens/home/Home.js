import __fetch from 'isomorphic-fetch';
import React, { Component } from 'react';
import Transmit from 'react-transmit';

/**
 * Main React application entry-point for both the server and client.
 */
export default class Main extends Component {
	/**
	 * Runs on server and client.
	 */
	componentWillMount () {
		if (__SERVER__) {
		}

		if (__CLIENT__) {
		}
	}

	/**
	 * Runs on server and client.
	 */
	render () {
		const styles = {};
		if (__CLIENT__) {
			const styles = require('./Home.scss');
			console.log(styles.home);
		}

		return (
      		<div s={styles.home}>
				<p>Main</p>
			</div>
		);
	}

}
