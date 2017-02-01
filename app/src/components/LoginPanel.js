/**
 * Created by JHJ on 2017. 1. 30..
 */
"use strict";

import React from 'react';
import { Grid, Segment, Header, Input, Form, Button } from 'semantic-ui-react';

import config from '../config';


export default React.createClass({
    propTypes: {
        theme: React.PropTypes.string,
        loginSubmitClick: React.PropTypes.func
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
                    <Form>
                        <Form.Field>
                            <Input icon='user' iconPosition='left' placeholder='ID'
                                   onChange={this.updateInputValue.bind(this, 'id')}/>
                        </Form.Field>
                        <Form.Field>
                            <Input icon='lock' iconPosition='left' placeholder='Password'
                                   onChange={this.updateInputValue.bind(this, 'password')}/>
                        </Form.Field>
                        <Form.Field>
                            <Button fluid={true} color={theme} onClick={() => { loginSubmitClick(id, password) }}>
                                Submit
                            </Button>
                        </Form.Field>
                    </Form>
                </Segment>
            </Grid.Column>
        );
    }
});
