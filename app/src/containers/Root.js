/**
 * Created by JHJ on 2017. 1. 15..
 */
"use strict";

import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'


export default React.createClass({
    render(){
        return (
            <Menu fixed='top' inverted={true}>
                <Menu.Item header color='teal' active={true}>Scheduler</Menu.Item>
                <Menu.Item>List</Menu.Item>
                <Menu.Item>
                    <Icon name="plus"/>
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item>Profile</Menu.Item>
                    <Menu.Item>Log out</Menu.Item>
                </Menu.Menu>
            </Menu>
        );
    }
});

