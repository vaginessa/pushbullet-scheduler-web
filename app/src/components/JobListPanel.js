/**
 * Created by JHJ on 2017. 2. 19..
 */
"use strict";

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
                                <Table.HeaderCell>Name</Table.HeaderCell>
                                <Table.HeaderCell>Message</Table.HeaderCell>
                                <Table.HeaderCell>Send to</Table.HeaderCell>
                                <Table.HeaderCell textAlign='right'>Run at</Table.HeaderCell>
                                <Table.HeaderCell><Icon name='refresh'/></Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {
                                rows.map((data) => {
                                    const date = new Date('2017-02-19T09:33:00.000Z');
                                    return <JobItem name={data.name} message={data.body} sendTo={data.targetEmail}
                                                    runAt="2017.03.08 11:03"/>;
                                })
                            }
                            <JobItem name="Study" message="It's time to study man!!" sendTo="guswnsxodlf@naver.com"
                                     runAt="2017.03.08 11:03"/>
                        </Table.Body>
                    </Table>
                </Dimmer.Dimmable>
            </Grid.Column>
        );
    }
});
