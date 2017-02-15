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
import { Router, Route, hashHistory, browserHistory, IndexRoute } from 'react-router';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

import reducers from './reducers';
import routers from './containers';


let history;
if(process.env === 'PROD'){
    history = browserHistory;
}else{
    history = hashHistory;
}

const rootReducer = combineReducers({
    ...reducers,
    form: formReducer,
    routing: routerReducer
});
const middlewares = applyMiddleware(
    routerMiddleware(history),
    thunk,
    createLogger()
);
const store = createStore(
    rootReducer,
    middlewares
);

const syncedHistory = syncHistoryWithStore(history, store);

const requireAuth = (nextState, replace) => {
    if(store.getState().user.accessToken === null){
        alert('로그인이 필요한 서비스입니다.');
        replace('/login');
    }
};

const requireAnonymous = (nextState, replace) => {
    if(store.getState().user.accessToken !== null){
        alert('로그아웃 상태여야 합니다.');
        replace('/');
    }
};

const App = React.createClass({
    render(){
        return (
            <Provider store={store}>
                <Router history={syncedHistory}>
                    <Route path="/" component={routers.Root}>
                        <IndexRoute component={routers.Home}/>
                        <Route path="list" component={routers.List} onEnter={requireAuth}/>
                        <Route path="login" component={routers.Login} onEnter={requireAnonymous}/>
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
