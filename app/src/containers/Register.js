/**
 * Created by JHJ on 2017. 4. 5..
 */
"use strict";

import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import RegisterPanel from '../components/RegisterPanel.js';
import { fetchAccessToken } from '../actions';


const bindStore = (state) => {
    return {
        user: state.user
    };
};

export default connect(bindStore)(React.createClass({
    RegisterSubmitClick(value){
        // this.props.dispatch(fetchAccessToken(value.id, value.password));
    },
    componentWillReceiveProps(nextProps) {
        // if (nextProps.user.accessToken !== null) {
        //     this.props.dispatch(push('/'));
        // }
    },
    render(){
        const loginReducer = this.props.user;
        return (
            <Container>
                <Grid centered columns={2} stackable={true}>
                    <RegisterPanel RegisterSubmitClick={this.loginSubmitClick} {...loginReducer}/>
                </Grid>
            </Container>
        );
    }
}));
