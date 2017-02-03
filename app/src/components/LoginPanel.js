/**
 * Created by JHJ on 2017. 1. 30..
 */
"use strict";

import React from 'react';
import { Grid, Segment, Header, Input, Form, Button } from 'semantic-ui-react';

import config from '../config';
import LoginForm from './LoginForm';


export default React.createClass({
    propTypes: {
        theme: React.PropTypes.string,
        loginSubmitClick: React.PropTypes.func.required
    },
    getDefaultProps() {
        return {
            theme: config.THEME
        };
    },
    render(){
        const { theme, loginSubmitClick } = this.props;
        return (
            <Grid.Column>
                <Header as='h4' attached='top' inverted>
                    Login
                </Header>
                <Segment attached>
                    <LoginForm onSubmit={loginSubmitClick} theme={theme}/>
                </Segment>
            </Grid.Column>
        );
    }
});
