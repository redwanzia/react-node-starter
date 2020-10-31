import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';

class App extends Component {
	render() {
		return (
			<Router>
				<Navbar />
				<main>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/about' component={About} />
						<Route exact path='/products' component={Products} />
					</Switch>
				</main>
			</Router>
		);
	}
}

export default App;
