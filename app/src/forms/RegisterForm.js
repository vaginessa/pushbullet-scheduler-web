/**
 * Created by JHJ on 2017. 4. 5..
 */
"use strict";

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { Input, Form, Button, Header } from 'semantic-ui-react';


export default reduxForm({
    form: 'Register'
})(React.createClass({
    render(){
        const { handleSubmit, theme, isFetching } = this.props;
        return (
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Email</label>
                    <Field name="email" type="email" placeholder="scheduler@example.com" required={true}
                           component={Input} {...Field.input}/>
                </Form.Field>
                <Form.Group>
                    <Form.Field width="8">
                        <label>Password</label>
                        <Field name="password" type="password" placeholder=""
                               required={true} component={Input} {...Field.input}/>
                    </Form.Field>
                    <Form.Field width="8">
                        <label>Check password</label>
                        <Field name="checkPassword" type="password" placeholder=""
                               required={true} component={Input} {...Field.input}/>
                    </Form.Field>
                </Form.Group>
                <Form.Field>
                    <label>Token</label>
                    <label className="help">Your pushbullet Access Token. Visit <a href="https://www.pushbullet.com/#settings">here</a>.</label>
                    <Field name="token" type="token" placeholder="o.Goa5q6ojwP3O6qPjdD6qCtXTW38x7pKn" required={true}
                           component={Input} {...Field.input}/>
                </Form.Field>
                <Form.Field>
                    <Button fluid={true} type="submit" color={theme} disabled={isFetching}>
                        Register
                    </Button>
                </Form.Field>
                <div className="center-aligned">Or, <Link to="/login">Login</Link></div>
            </Form>
        );
    }
}));
