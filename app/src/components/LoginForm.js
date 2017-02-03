/**
 * Created by JHJ on 2017. 2. 3..
 */
"use strict";

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, Form, Button } from 'semantic-ui-react';


export default reduxForm({
    form: 'Login'
})(React.createClass({
    render(){
        const { handleSubmit } = this.props;
        return (
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <Field name="id" type="text" icon="user" iconPosition="left" placeholder="ID" component={Input}/>
                </Form.Field>
                <Form.Field>
                    <Field name="password" type="text" icon="lock" iconPosition="left" placeholder="Password"
                           component={Input}/>
                </Form.Field>
                <Form.Field>
                    <Button fluid={true} type="submit">
                        Submit
                    </Button>
                </Form.Field>
            </Form>
        );
    }
}));
