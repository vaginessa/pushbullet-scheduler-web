/**
 * Created by JHJ on 2017. 1. 15..
 */
"use strict";

import React from 'react';
import { Menu, Container, Dropdown } from 'semantic-ui-react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import config from '../config';
import { logout } from '../actions/index.js';

const bindStore = (state) => {
    return {
        user: state.user
    };
};

export default connect(bindStore)(React.createClass({
    routerClick(e, { to }) {
        this.props.dispatch(push(to));
    },
    logoutClick(){
        this.props.dispatch(logout());
        this.props.dispatch(push('/'));
    },
    render() {
        // Change right side menu depends on login state.
        let rightMenu;
        if(this.props.user.accessToken === null){
            rightMenu = <Menu.Item onClick={this.routerClick} to="/login" link={true} name="Login"/>;
        }else{
            rightMenu = (
                <Dropdown item text={this.props.user.data.name}>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={this.logoutClick}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            );
        }

        return (
            <div>
                <Menu fixed='top' inverted={true}>
                    <Container>
                        <Menu.Item header onClick={this.routerClick} to="/" color={config.THEME} active={true} link={true}
                                   name="Scheduler"/>
                        <Menu.Item onClick={this.routerClick} to="/list" link={true} name="Job list"/>
                        <Menu.Menu position='right'>
                            { rightMenu }
                        </Menu.Menu>
                    </Container>
                </Menu>
                {this.props.children}
            </div>
        );
    }
}));
