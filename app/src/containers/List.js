/**
 * Created by JHJ on 2017. 1. 19..
 */
"use strict";

import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';

import JobListPanel from '../components/JobListPanel.js';
import { fetchJobList } from '../actions/index.js';


const bindStore = (state) => {
    return {
        user: state.user,
        jobList: state.jobList
    };
};

export default connect(bindStore)(React.createClass({
    componentWillMount(){
        this.props.dispatch(fetchJobList(this.props.user.accessToken));
    },
    render(){
        return (
            <Container>
                <Grid stackable={true}>
                    <JobListPanel {...this.props.jobList}/>
                </Grid>
            </Container>
        );
    }
}));
