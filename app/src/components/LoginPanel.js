/**
 * Created by JHJ on 2017. 1. 30..
 */
"use strict";

import React from 'react';
import { Grid, Segment, Header, Input, Form, Button } from 'semantic-ui-react';

import config from '../config';


export default React.createClass({
    propTypes: {
        theme: React.PropTypes.string
    },
    getDefaultProps() {
        return {
            theme: config.THEME
        };
    },
    render(){
        console.log(this.props.theme);
        return (
            <Grid.Column>
                <Header as='h4' attached='top' inverted>
                    Login
                </Header>
                <Segment attached>
                    <Form>
                        <Form.Field>
                            <Input icon='user' iconPosition='left' placeholder='ID'/>
                        </Form.Field>
                        <Form.Field>
                            <Input icon='lock' iconPosition='left' placeholder='Password'/>
                        </Form.Field>
                        <Form.Field>
                            <Button fluid={true} color={this.props.theme}>Submit</Button>
                        </Form.Field>
                    </Form>
                </Segment>
            </Grid.Column>
        );
    }
});
