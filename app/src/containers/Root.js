/**
 * Created by JHJ on 2017. 1. 15..
 */
"use strict";

import React from 'react';
import { Menu, Icon, Container, Dropdown } from 'semantic-ui-react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

const Root = React.createClass({
    itemClick(e, { to }) {
        this.props.dispatch(push(to));
        console.log('1');
    },
    render() {
        return (
            <div>
                <Menu fixed='top' inverted={true}>
                    <Container>
                        <Menu.Item header onClick={this.itemClick} to="/" color='teal' active={true} link={true}
                                   name="Scheduler"/>
                        <Menu.Item onClick={this.itemClick} to="/list" link={true} name="List"/>
                        <Menu.Item onClick={this.itemClick} to="/" link={true} icon="plus"/>

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

const bindStore = (state) => {
    return state;
};

export default connect(bindStore)(Root);
