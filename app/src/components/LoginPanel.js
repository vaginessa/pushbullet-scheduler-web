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
        loginSubmitClick: React.PropTypes.func
    },
    handleSubmit: (values) => {
        // Do something with the form values
        console.log(values);
    },
    getDefaultProps() {
        return {
            theme: config.THEME
        };
    },
    getInitialState() {
        return {
            id: '',
            password: '',
        }
    },
    updateInputValue(name, e) {
        this.setState(Object.assign(this.state, {
            [name]: e.target.value
        }));
    },
    render(){
        const { theme, loginSubmitClick } = this.props;
        const { id, password } = this.state;
        return (
            <Grid.Column>
                <Header as='h4' attached='top' inverted>
                    Login
                </Header>
                <Segment attached>
                    <LoginForm onSubmit={this.handleSubmit}/>
                </Segment>
            </Grid.Column>
        );
    }
});
