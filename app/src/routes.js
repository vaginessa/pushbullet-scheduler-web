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
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import reducers from './reducers';

// Routes
import Root from './containers/Root.js';
import Home from './containers/Home.js';
import List from './containers/List.js';


const store = createStore(
    combineReducers({
        ...reducers,
        routing: routerReducer
    })
);

const history = syncHistoryWithStore(hashHistory, store);

const App = React.createClass({
    render(){
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route path="/" component={Root}>
                        <IndexRoute component={Home}/>
                        <Route path="list" component={List}/>
                        {/*<Route path="user" component={User}/>*/}
                        {/*<Route path="login" component={Login}/>*/}
                    </Route>
                </Router>
            </Provider>
        );
    }
});

window.onload = () => {
    ReactDOM.render(<App/>, document.getElementById("root"));
};
