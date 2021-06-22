import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Kendo from './kendo';
import MaterialGrid from './materialGrid';
import ScrollInfinite from './infiniteScroll.js';
import InfiniteMaterialGrid from './infiniteMaterialGrid.js';
import reportWebVitals from './reportWebVitals';
import {  Router, Route } from 'react-router';
// import { createBrowserHistory } from 'history'

import { browserHistory } from 'react-router';

ReactDOM.render(
	<Router history={browserHistory}>
		<div>
			<Route path="/" component={App} />
			<Route path="/kendo" component={Kendo} />
			<Route path="/mgrid" component={MaterialGrid} />
			<Route path="/iscroll" component={ScrollInfinite} />
			<Route path="/iMscroll" component={InfiniteMaterialGrid} />
		</div>
	</Router>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
