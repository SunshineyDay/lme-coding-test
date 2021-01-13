import React from 'react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home } from './components/Home';
import { Instructions } from './components/Instructions';
import { AppProvider } from './state/Context';
import { Results } from './components/Results';
import logo from './images/London_Metal_Exchange_logo.svg';

function App() {
	return (
		<AppProvider>
			<Router>
				<nav className="navbar navbar-expand-lg navbar-light">
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<a className="navbar-brand" href="/">
								<img src={logo} className="nav-logo" alt="LME" height="24px" width="200px" />
							</a>
							<Link className="nav-link" to="/">
								Home
							</Link>
							<Link className="nav-link" to="/results">
								Results
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
					<Route path="/results">
						<Results />
					</Route>
				</Switch>
			</Router>
		</AppProvider>
	);
}

export default App;
