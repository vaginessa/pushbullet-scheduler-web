/**
 * Created by JHJ on 2017. 1. 20..
 */
"use strict";

import espromise from 'es6-promise';
import fetch from 'isomorphic-fetch';

import config from '../config';


espromise.polyfill();

// Action types
export const REQUEST_ACCESS_TOKEN = 'REQUEST_ACCESS_TOKEN';
export const RECEIVE_ACCESS_TOKEN = 'RECEIVE_ACCESS_TOKEN';


// Constants
export const Routers = {
    HOME: "HOME",
    LIST: "LIST"
};


// Actions creators
export const requestAccessToken = () => {
    return {
        type: REQUEST_ACCESS_TOKEN,
        id,
        password
    };
};

export const receiveAccessToken = () => {
    return {
        type: RECEIVE_ACCESS_TOKEN
    };
};

export const fetchAccessToken = (id, password) => {
    return (dispatch) => {
        dispatch(requestAccessToken(id, password));

        //TODO
    };
};
