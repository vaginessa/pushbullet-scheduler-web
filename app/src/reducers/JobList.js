/**
 * Created by JHJ on 2017. 2. 19..
 */
"use strict";

import {
    REQUEST_JOB_LIST,
    RECEIVE_JOB_LIST
} from '../actions/index.js';


export default (state = {
    isFetching: false,
    count: 0,
    rows: []
}, action) => {
    switch(action.type){
        case REQUEST_JOB_LIST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_JOB_LIST:
            return Object.assign({}, state, {
                isFetching: false,
                count: action.count,
                rows: action.rows
            });
        default:
            return state;
    }
};
