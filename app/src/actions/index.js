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
export const REQUEST_JOB_LIST = 'REQUEST_JOB_LIST';
export const RECEIVE_JOB_LIST = 'RECEIVE_JOB_LIST';
export const REQUEST_ADD_JOB = 'REQUEST_ADD_JOB';
export const RECEIVE_ADD_JOB = 'RECEIVE_ADD_JOB';
export const LOGOUT = 'LOGOUT';

// Actions creators
const requestAccessToken = () => {
    return {
        type: REQUEST_ACCESS_TOKEN
    };
};

export const receiveAccessToken = (data) => {
    return {
        type: RECEIVE_ACCESS_TOKEN,
        accessToken: data.accessToken,
        info: data.data
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
                    localStorage.setItem('user', JSON.stringify({
                        accessToken: data.accessToken,
                        data: data.data
                    }));
                    dispatch(receiveAccessToken(data));
                });
            }
        });
    };
};

export const logout = () => {
    localStorage.clear();
    return {
        type: LOGOUT
    };
};

const requestJobList = () => {
    return {
        type: REQUEST_JOB_LIST
    };
};

const receiveJobList = (data) => {
    return {
        type: RECEIVE_JOB_LIST,
        count: data.count,
        rows: data.rows
    };
};

export const fetchJobList = (accessToken) => {
    return (dispatch) => {
        dispatch(requestJobList());
        const request = new Request(config.BASE_URL + '/jobs', {
            method: 'GET',
            headers: {
                "accessToken": accessToken
            }
        });
        return fetch(request).then((res) => {
            if(res.status === 200){
                res.json().then((data) => {
                    dispatch(receiveJobList(data));
                });
            }
        });
    };
};

const requestAddJob = () => {
    return {
        type: REQUEST_ADD_JOB
    };
};

const receiveAddJob = () => {
    return {
        type: RECEIVE_ADD_JOB
    };

};

export const fetchAddJob = (accessToken, name, body, runAt, targetEmail) => {
    return (dispatch) => {
        dispatch(requestAddJob());
        const request = new Request(config.BASE_URL + '/jobs', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "accessToken": accessToken
            },
            body: JSON.stringify({
                name,
                body,
                runAt,
                targetEmail
            })
        });
        return fetch(request).then((res) => {
            if(res.status === 200){
                res.json().then((data) => {
                    dispatch(receiveAddJob(data));
                    dispatch(fetchJobList(accessToken));
                });
            }
        });
    };
};
