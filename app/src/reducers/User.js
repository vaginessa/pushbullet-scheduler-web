/**
 * Created by JHJ on 2017. 1. 20..
 */
"use strict";

import {
    Routers,
    REQUEST_ACCESS_TOKEN,
    RECEIVE_ACCESS_TOKEN
} from '../actions/index.js';


export default (state = {
    isFetching: false,
    accessToken: null,
    data: {
        email: null,
        name: null,
        token: null,
        createdAt: null,
        updatedAt: null
    }
}, action) => {
    switch(action.type){
        case REQUEST_ACCESS_TOKEN:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_ACCESS_TOKEN:
            return Object.assign({}, state, {
                isFetching: false,
                accessToken: action.accessToken,
                data: action.data
            });
        default:
            return state;
    }
};
