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
export const requestAccessToken = (id, password) => {
    return {
        type: REQUEST_ACCESS_TOKEN,
        id,
        password
    };
};

export const receiveAccessToken = (token) => {
    return {
        type: RECEIVE_ACCESS_TOKEN,
        token
    };
};

export const fetchAccessToken = (id, password) => {
    return (dispatch) => {
        dispatch(requestAccessToken(id, password));
        const myInit = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        };
        return fetch(config.BASE_URL + '/users/login/', myInit).then((a) => {
            console.log(a);
        });
    };
};
