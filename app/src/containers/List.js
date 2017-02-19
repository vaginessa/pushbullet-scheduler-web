/**
 * Created by JHJ on 2017. 1. 19..
 */
"use strict";

import React from 'react';
import { Container, Grid } from 'semantic-ui-react';

import JobListPanel from '../components/JobListPanel.js';


export default React.createClass({
    render(){
        return (
            <Container>
                <Grid stackable={true}>
                    <JobListPanel/>
                </Grid>
            </Container>
        );
    }
});
