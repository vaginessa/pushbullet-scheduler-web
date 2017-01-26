/**
 * Created by JHJ on 2017. 1. 20..
 */
"use strict";

import { Routers, SWITCH_ROUTE } from '../actions/index.js';


export default (state = Routers.HOME, action) => {
    switch(action.type){
        case SWITCH_ROUTE:
            return action.route;

        default:
            return state;
    }
};
