/**
 * Created by JHJ on 2017. 2. 19..
 */
"use strict";

import React from 'react';
import { Icon, Table } from 'semantic-ui-react';


export default React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        message: React.PropTypes.string.isRequired,
        sendTo: React.PropTypes.string.isRequired,
        runAt: React.PropTypes.string.isRequired,
    },
    render(){
        const { name, message, sendTo, runAt } = this.props;

        return (
            <Table.Row>
                <Table.Cell><strong>{name}</strong></Table.Cell>
                <Table.Cell>{message}</Table.Cell>
                <Table.Cell>{sendTo}</Table.Cell>
                <Table.Cell textAlign='right'>{runAt}</Table.Cell>
                <Table.Cell><Icon name='delete'/></Table.Cell>
            </Table.Row>
        );
    }
});
