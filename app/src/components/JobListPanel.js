/**
 * Created by JHJ on 2017. 2. 19..
 */
"use strict";

import React from 'react';
import { Grid, Segment, Header, Table } from 'semantic-ui-react';

import config from '../config';


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
        const { columnWidth } = this.props;

        return (
            <Grid.Column width={columnWidth}>
                <Header as='h2'>
                    Job list
                </Header>
                <Table stackable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                            <Table.HeaderCell textAlign='right'>Notes</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>John</Table.Cell>
                            <Table.Cell>Approved</Table.Cell>
                            <Table.Cell textAlign='right'>None</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Jamie</Table.Cell>
                            <Table.Cell>Approved</Table.Cell>
                            <Table.Cell textAlign='right'>Requires call</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Jill</Table.Cell>
                            <Table.Cell>Denied</Table.Cell>
                            <Table.Cell textAlign='right'>None</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Grid.Column>
        );
    }
});
