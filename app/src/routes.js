/**
 * Created by JHJ on 2017. 1. 11..
 */
'use strict';

// It should be removed when produce
import "./index.html";
import "semantic-ui-css/semantic.css";
import "./scss/main.scss";

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import Root from './containers/Root.js';
import Home from './containers/Home.js';
import List from './containers/List.js';


const App = React.createClass({
    render(){
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Root}>
                    <IndexRoute component={Home}/>
                    <Route path="list" component={List}/>
                    {/*<Route path="user" component={User}/>*/}
                    {/*<Route path="login" component={Login}/>*/}
                </Route>
            </Router>
        );
    }
});

window.onload = () => {
    ReactDOM.render(<App/>, document.getElementById("root"));
};
