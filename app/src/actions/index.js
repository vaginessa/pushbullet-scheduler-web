/**
 * Created by JHJ on 2017. 1. 20..
 */
"use strict";

// Action types
export const SWITCH_ROUTE = 'SWITCH_ROUTE';


// Constants
export const Routers = {
    HOME: "HOME",
    LIST: "LIST"
};


// Actions creators

export const switch_route = (route) => {
    return {
        type: SWITCH_ROUTE,
        route
    };
};
