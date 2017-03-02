/**
 * Created by JHJ on 2017. 2. 19..
 */
"use strict";

import {
    REQUEST_JOB_LIST,
    RECEIVE_JOB_LIST,
    REQUEST_ADD_JOB,
    RECEIVE_ADD_JOB,
    REQUEST_DELETE_JOB,
    FAIL_TO_RECEIVE_ADD_JOB
} from '../actions/index.js';


export default (state = {
    isListFetching: false,
    isFormFetching: false,
    count: 0,
    rows: []
}, action) => {
    switch(action.type){
        case REQUEST_DELETE_JOB:
        case REQUEST_JOB_LIST:
            return Object.assign({}, state, {
                isListFetching: true
            });
        case RECEIVE_JOB_LIST:
            return Object.assign({}, state, {
                isListFetching: false,
                count: action.count,
                rows: action.rows
            });
        case REQUEST_ADD_JOB:
            return Object.assign({}, state, {
                isFormFetching: true
            });
        case FAIL_TO_RECEIVE_ADD_JOB:
        case RECEIVE_ADD_JOB:
            return Object.assign({}, state, {
                isFormFetching: false
            });
        default:
            return state;
    }
};
