import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';
import 'bulma/css/bulma.css'

import { Detail } from './pages/Detail';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

class App extends Component {


	render() {

		return (
			<div className="App">
				<Switch>
					<Route exact path='/search-movies/' component={Home} />
					<Route exact path='/search-movies/detail/:id' component={Detail} />
					<Route component={NotFound} />
				</Switch>
			</div>
		)
	}
}

export default App;
