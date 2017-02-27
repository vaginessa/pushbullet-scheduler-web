/**
 * Created by JHJ on 2017. 1. 19..
 */
"use strict";

import React from 'react';
import dateFormat from 'dateformat';
import { Container, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';

import JobListPanel from '../components/JobListPanel.js';
import AddJobPanel from '../components/AddJobPanel.js';
import { fetchJobList, fetchAddJob } from '../actions/index.js';


const bindStore = (state) => {
    return {
        user: state.user,
        job: state.job
    };
};

export default connect(bindStore)(React.createClass({
    componentWillMount(){
        this.props.dispatch(fetchJobList(this.props.user.accessToken));
    },
    addJobSubmitClick(value){
        const { name, message, runDate, runHour, runMinute, targetEmail } = value;
        const dateString = dateFormat(new Date(runDate + ' ' + runHour + ':' + runMinute), 'yyyy-mm-dd HH:MM');
        this.props.dispatch(fetchAddJob(this.props.user.accessToken, name, message, dateString, targetEmail));
    },
    itemDeleteClick(){
        console.log('hello')
    },
    render(){
        return (
            <Container>
                <Grid stackable={true}>
                    <JobListPanel columnWidth={10} itemDeleteClick={this.itemDeleteClick} {...this.props.job}/>
                    <AddJobPanel columnWidth={6} addJobSubmitClick={this.addJobSubmitClick} {...this.props.job}/>
                </Grid>
            </Container>
        );
    }
}));
