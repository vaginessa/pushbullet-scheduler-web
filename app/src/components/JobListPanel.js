/**
 * Created by JHJ on 2017. 2. 19..
 */
"use strict";

import dateFormat from 'dateformat';
import React from 'react';
import { Grid, Header, Table, Dimmer, Loader, Icon } from 'semantic-ui-react';

import config from '../config';
import JobItem from './JobItem.js';


export default React.createClass({
    propTypes: {
        theme: React.PropTypes.string,
        columnWidth: React.PropTypes.number,
    },
    getDefaultProps() {
        return {
            theme: config.THEME,
            columnWidth: 10
        };
    },
    render(){
        const { columnWidth, rows, isFetching } = this.props;

        return (
            <Grid.Column width={columnWidth}>
                <Header as='h2'>
                    Job list
                </Header>
                <Dimmer.Dimmable>
                    <Dimmer active={isFetching} inverted>
                        <Loader/>
                    </Dimmer>
                    <Table stackable>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>#</Table.HeaderCell>
                                <Table.HeaderCell>Name</Table.HeaderCell>
                                <Table.HeaderCell>Message</Table.HeaderCell>
                                <Table.HeaderCell>Send to</Table.HeaderCell>
                                <Table.HeaderCell textAlign='right'>Run at</Table.HeaderCell>
                                <Table.HeaderCell><Icon name='refresh'/></Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {
                                rows.map((data, index) => {
                                    const dateString = dateFormat(new Date(data.runAt), 'yyyy.mm.dd HH:MM');
                                    return <JobItem name={data.name} message={data.body} sendTo={data.targetEmail}
                                                    key={index} number={index+1} runAt={dateString}/>;
                                })
                            }
                        </Table.Body>
                    </Table>
                </Dimmer.Dimmable>
            </Grid.Column>
        );
    }
});
