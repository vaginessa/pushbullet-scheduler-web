/**
 * Created by JHJ on 2017. 2. 21..
 */
"use strict";

import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';

import config from '../config';
import JobForm from '../forms/JobForm.js';


export default React.createClass({
    propTypes: {
        theme: React.PropTypes.string,
        addJobSubmitClick: React.PropTypes.func.isRequired,
        columnWidth: React.PropTypes.number,
    },
    getDefaultProps() {
        return {
            theme: config.THEME,
            columnWidth: 6
        };
    },
    render(){
        const { theme, addJobSubmitClick, isFetching, columnWidth } = this.props;
        return (
            <Grid.Column width={columnWidth}>
                <Header as='h2'>
                    Add job
                </Header>
                <Segment>
                    <JobForm onSubmit={addJobSubmitClick} theme={theme} isFetching={isFetching}/>
                </Segment>
            </Grid.Column>
        );
    }
});
