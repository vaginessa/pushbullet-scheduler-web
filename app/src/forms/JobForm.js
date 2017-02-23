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
                    <label>Name</label>
                    <Field name="name" type="text" placeholder="Name" required={true}
                           component={Input} {...Field.input}/>
                </Form.Field>
                <Form.Field>
                    <label>Message</label>
                    <Field name="message" type="text" placeholder="Message"
                           required={true} component={Input} {...Field.input}/>
                </Form.Field>
                <Form.Field>
                    <label>Receiver's email</label>
                    <Field name="targetEmail" type="text" placeholder="Receiver's email"
                           required={true} component={Input} {...Field.input}/>
                </Form.Field>
                <Form.Field>
                    <label>Run At</label>
                    <Field name="runAt" type="date" placeholder="Run At"
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
