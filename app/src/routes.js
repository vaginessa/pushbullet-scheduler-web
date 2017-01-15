/**
 * Created by JHJ on 2017. 1. 11..
 */
'use strict';

import "./index.html";
import "semantic-ui-css/semantic.css"

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import Root from './containers/Root.js';


const App = React.createClass({
    render(){
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Root}>
                    {/*<IndexRoute component={Home}/>*/}
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
