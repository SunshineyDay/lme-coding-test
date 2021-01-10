import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home } from './components/home';
import { Instructions } from './components/instructions';

function App() {
	return (
		<Router>
			<nav className="navbar navbar-expand-lg navbar-light">
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<Link className="nav-link" to="/">
							Home
						</Link>
						<Link className="nav-link" to="/instructions">
							Instruction Types
						</Link>
					</div>
				</div>
			</nav>

			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/instructions">
					<Instructions />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
