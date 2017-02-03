/**
 * Created by JHJ on 2017. 1. 25..
 */
"use strict";

import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';

import LoginPanel from '../components/LoginPanel.js';
import { fetchAccessToken } from '../actions';


const bindStore = (state) => {
    return state;
};

export default connect(bindStore)(React.createClass({
    loginSubmitClick(value){
        this.props.dispatch(fetchAccessToken(value.id, value.password));
    },
    render(){
        return (
            <Container>
                <Grid centered columns={3} className="stackable">
                    <LoginPanel loginSubmitClick={this.loginSubmitClick}/>
                </Grid>
            </Container>
        );
    }
}));
