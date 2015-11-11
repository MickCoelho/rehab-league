import __fetch from 'isomorphic-fetch';
import React, { Component } from 'react';
import InlineCss from 'react-inline-css';
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
			/**
			 * This is only run on the server, and will be removed from the client build.
			 */
			console.log('Hello server');
		}

		if (__CLIENT__) {
			/**
			 * This is only run on the client.
			 */
			console.log('Hello client');

		}
	}

	/**
	 * Runs on server and client.
	 */
	render () {

		return (
			<InlineCss stylesheet={Main.css()} namespace='Main'>
				<p>About</p>
			</InlineCss>
		);
	}
	/**
	 * <InlineCss> component allows you to write a CSS stylesheet for your component. Target
	 * your component with `&` and its children with `& selectors`. Be specific.
	 */
	static css () {
		return (`
			& .github {
				position: absolute;
				top: 0;
				right: 0;
				border: 0;
			}
			& {
				font-family: sans-serif;
				color: #0df;
				padding: 10px 30px 30px;
				width: 443px;
				margin: 10px auto;
				background: #222;
			}
		`);
	}

}
