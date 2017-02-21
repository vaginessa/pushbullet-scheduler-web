/**
 * Created by JHJ on 2017. 2. 21..
 */
"use strict";

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, Form, Button } from 'semantic-ui-react';


export default reduxForm({
    form: 'Job'
})(React.createClass({
    render(){
        const { handleSubmit, theme, isFetching } = this.props;
        return (
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <Field name="name" type="text" placeholder="Name" required={true}
                           component={Input} {...Field.input}/>
                </Form.Field>
                <Form.Field>
                    <Field name="message" type="text" placeholder="Message"
                           required={true} component={Input} {...Field.input}/>
                </Form.Field>
                <Form.Field>
                    <Button fluid={true} type="submit" color={theme} disabled={isFetching}>
                        Add job
                    </Button>
                </Form.Field>
            </Form>
        );
    }
}));
