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
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

import reducers from './reducers';
import routers from './containers';


const rootReducer = combineReducers({
    ...reducers,
    form: formReducer,
    routing: routerReducer
});
const middlewares = applyMiddleware(
    routerMiddleware(hashHistory),
    thunk,
    createLogger()
);
const store = createStore(
    rootReducer,
    middlewares
);

const history = syncHistoryWithStore(hashHistory, store);

const requireAuth = () => {
    //TODO
};

const App = React.createClass({
    render(){
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route path="/" component={routers.Root}>
                        <IndexRoute component={routers.Home}/>
                        <Route path="list" component={routers.List} onEnter={requireAuth}/>
                        <Route path="login" component={routers.Login}/>
                        {/*<Route path="user" component={User}/>*/}
                    </Route>
                </Router>
            </Provider>
        );
    }
});

window.onload = () => {
    ReactDOM.render(<App/>, document.getElementById("root"));
};
