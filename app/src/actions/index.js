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
        type: REQUEST_ACCESS_TOKEN
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
        dispatch(requestAccessToken());
        const request = new Request(config.BASE_URL + '/users/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({
                email: id,
                password
            })
        });
        return fetch(request).then((res) => {
            if(res.status === 200){
                res.json().then((data) => {
                    console.log(data.token);
                });
            }
        });
    };
};
