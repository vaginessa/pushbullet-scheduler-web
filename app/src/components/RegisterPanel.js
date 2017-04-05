/**
 * Created by JHJ on 2017. 4. 5..
 */
"use strict";

import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';

import config from '../config';
import RegisterForm from '../forms/RegisterForm.js';


export default React.createClass({
    propTypes: {
        theme: React.PropTypes.string,
        RegisterSubmitClick: React.PropTypes.func.isRequired
    },
    getDefaultProps() {
        return {
            theme: config.THEME
        };
    },
    render(){
        const { theme, RegisterSubmitClick, isFetching } = this.props;
        return (
            <Grid.Column>
                <Header as='h4' attached='top' inverted>
                    Register
                </Header>
                <Segment attached>
                    <RegisterForm onSubmit={RegisterSubmitClick} theme={theme} isFetching={isFetching}/>
                </Segment>
            </Grid.Column>
        );
    }
});
