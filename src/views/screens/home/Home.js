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
			if (__CLIENT__) {
    	const styles = require('./Home.scss');
			}

		return (
      		<div className={'sad'}>
				<p>Main</p>
			</div>
		);
	}

}
