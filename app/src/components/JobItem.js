/**
 * Created by JHJ on 2017. 2. 19..
 */
"use strict";

import React from 'react';
import { Icon, Table } from 'semantic-ui-react';


export default React.createClass({
    propTypes: {
        id: React.PropTypes.number.isRequired,
        number: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        message: React.PropTypes.string.isRequired,
        sendTo: React.PropTypes.string.isRequired,
        runAt: React.PropTypes.string.isRequired,
        deleteClick: React.PropTypes.func.isRequired
    },
    render(){
        const { id, number, name, message, sendTo, runAt, deleteClick } = this.props;

        return (
            <Table.Row>
                <Table.Cell>{number}</Table.Cell>
                <Table.Cell><strong>{name}</strong></Table.Cell>
                <Table.Cell>{message}</Table.Cell>
                <Table.Cell>{sendTo}</Table.Cell>
                <Table.Cell textAlign='right'>{runAt}</Table.Cell>
                <Table.Cell><Icon name='delete' onClick={()=>{deleteClick(id, name)}}/></Table.Cell>
            </Table.Row>
        );
    }
});
