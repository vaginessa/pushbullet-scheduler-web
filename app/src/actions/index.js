/**
 * Created by JHJ on 2017. 1. 20..
 */
"use strict";

import espromise from 'es6-promise';
import fetch from 'isomorphic-fetch';

import config from '../config';


espromise.polyfill();

// Messages
const SERVER_ERR = '서버 에러..';
const NEED_LOGIN = '로그인이 필요한 서비스입니다';
const EMAIL_NOT_FOUND = '이메일을 다시 확인해주세요.';
const PASSWORD_INCORRECT = '비밀번호를 다시 확인해주세요.';

// Action types
export const REQUEST_ACCESS_TOKEN = 'REQUEST_ACCESS_TOKEN';
export const RECEIVE_ACCESS_TOKEN = 'RECEIVE_ACCESS_TOKEN';
export const FAIL_TO_RECEIVE_ACCESS_TOKEN = 'FAIL_TO_RECEIVE_ACCESS_TOKEN';
export const REQUEST_JOB_LIST = 'REQUEST_JOB_LIST';
export const RECEIVE_JOB_LIST = 'RECEIVE_JOB_LIST';
export const FAIL_TO_RECEIVE_JOB_LIST = 'FAIL_TO_RECEIVE_JOB_LIST';
export const REQUEST_ADD_JOB = 'REQUEST_ADD_JOB';
export const RECEIVE_ADD_JOB = 'RECEIVE_ADD_JOB';
export const FAIL_TO_RECEIVE_ADD_JOB = 'FAIL_TO_RECEIVE_ADD_JOB';
export const REQUEST_DELETE_JOB = 'REQUEST_DELETE_JOB';
export const FAIL_TO_DELETE_JOB = 'FAIL_TO_DELETE_JOB';
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

export const failToReceiveAccessToken = () => {
    return {
        type: FAIL_TO_RECEIVE_ACCESS_TOKEN,
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
            switch(res.status) {
                case 200:
                    res.json().then((data) => {
                        localStorage.setItem('user', JSON.stringify({
                            accessToken: data.accessToken,
                            data: data.data
                        }));
                        dispatch(receiveAccessToken(data));
                    });
                    break;
                case 400:
                    res.text().then((data) => {
                        alert(EMAIL_NOT_FOUND);
                        dispatch(failToReceiveAccessToken());
                    });
                    break;
                case 404:
                    alert(PASSWORD_INCORRECT);
                    break;
            }
        }, () => {
            alert(SERVER_ERR);
            dispatch(failToReceiveAccessToken());
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

const failToReceiveJobList = () => {
    return {
        type: FAIL_TO_RECEIVE_JOB_LIST
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
            switch(res.status) {
                case 200:
                    res.json().then((data) => {
                        dispatch(receiveJobList(data));
                    });
                    break;
                case 400:
                    res.text().then((data) => {
                        alert(data);
                        dispatch(failToReceiveJobList());
                    });
                    break;
                case 403:
                    alert(NEED_LOGIN);
                    break;
            }
        }, () => {
            alert(SERVER_ERR);
            dispatch(failToReceiveJobList());
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

const failToReceiveAddJob = () => {
    return {
        type: FAIL_TO_RECEIVE_ADD_JOB
    };
};

export const fetchAddJob = (accessToken, name, body, runAt, targetEmail, callback) => {
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
            switch(res.status) {
                case 200:
                    res.json().then((data) => {
                        alert(data.name + " 작업이 추가되었습니다.");
                        dispatch(receiveAddJob());
                        dispatch(fetchJobList(accessToken));
                    });
                    break;
                case 400:
                    res.text().then((data) => {
                        alert(data);
                        dispatch(failToReceiveAddJob());
                    });
                    break;
                case 403:
                    alert(NEED_LOGIN);
                    break;
            }
        }, () => {
            alert(SERVER_ERR);
            dispatch(failToReceiveAddJob());
        });
    };
};

const requestDeleteJob = () => {
    return {
        type: REQUEST_DELETE_JOB
    };
};

const failToDeleteJob = () => {
    return {
        type: FAIL_TO_DELETE_JOB
    };
};

export const fetchDeleteJob = (accessToken, id) => {
    return (dispatch) => {
        dispatch(requestDeleteJob());
        const request = new Request(config.BASE_URL + '/jobs/' + id, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "accessToken": accessToken
            },
        });
        return fetch(request).then((res) => {
            switch(res.status) {
                case 200:
                    dispatch(fetchJobList(accessToken));
                    break;
                case 400:
                    res.text().then((data) => {
                        alert(data);
                        dispatch(failToDeleteJob());
                    });
                    break;
                case 403:
                    alert(NEED_LOGIN);
                    dispatch(failToDeleteJob());
                    break;
            }
        }, () => {
            alert(SERVER_ERR);
            dispatch(failToDeleteJob());
        });
    };
};
