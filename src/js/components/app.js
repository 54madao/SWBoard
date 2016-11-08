import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Login from './login';
import Home from './home';

export default class App extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
            	<Route path="/">
      				<IndexRoute component={Home}/>
    			</Route>
			    <Route path="/login" component={Login}/>
			</Router>
        );
    }
}
