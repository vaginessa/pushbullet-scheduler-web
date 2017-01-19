/**
 * Created by JHJ on 2017. 1. 15..
 */
"use strict";

import React from 'react';
import { Menu, Icon, Container, Dropdown } from 'semantic-ui-react';


export default React.createClass({
    render(){
        return (
            <div>
                <Menu fixed='top' inverted={true}>
                    <Container>
                        <Menu.Item header color='teal' active={true} link={true}>Scheduler</Menu.Item>
                        <Menu.Item link={true}>List</Menu.Item>
                        <Menu.Item link={true} icon="plus"/>

                        <Menu.Menu position='right'>
                            <Dropdown as={Menu.Item} text='Login'>
                                <Dropdown.Menu>
                                    <Dropdown.Header>Text Size</Dropdown.Header>
                                    <Dropdown.Item>Small</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Menu.Menu>
                    </Container>
                </Menu>
                {this.props.children}
            </div>
        );
    }
});

