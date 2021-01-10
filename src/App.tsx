import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home } from './components/Home';
import { Instructions } from './components/Instructions';
import { AppProvider } from './state/Context';

function App() {
	return (
		<AppProvider>
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
		</AppProvider>
	);
}

export default App;
