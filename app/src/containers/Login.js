/**
 * Created by JHJ on 2017. 1. 25..
 */
"use strict";

import React from 'react';
import { Container, Grid, Segment, Header, Input, Form, Button} from 'semantic-ui-react';

import LoginPanel from '../components/LoginPanel.js';


export default React.createClass({
    render(){
        return (
            <Container>
                <Grid centered columns={3} className="stackable">
                    <LoginPanel/>
                </Grid>
            </Container>
        );
    }
});
