/**
 * Created by JHJ on 2017. 2. 21..
 */
"use strict";

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form } from 'semantic-ui-react';

import padCharacter from '../utils/padCharacter.js';


export default reduxForm({
    form: 'Job'
})(React.createClass({
    render(){
        const { handleSubmit, theme, isFetching } = this.props;
        const runHourOptions = [];
        const runMinuteOptions = [];

        runHourOptions.push(<option/>);
        runMinuteOptions.push(<option/>);
        for(let i=0;i<60;i++){
            if(i < 24){
                runHourOptions.push(<option value={i}>{padCharacter(i, 2)}</option>);
            }
            runMinuteOptions.push(<option value={i}>{padCharacter(i, 2)}</option>);
        }

        return (
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Name</label>
                    <Field name="name" type="text" placeholder="Name" required={true}
                           component={Form.Input} {...Field.input}/>
                </Form.Field>
                <Form.Field>
                    <label>Message</label>
                    <Field name="message" type="text" placeholder="Message"
                           required={true} component={Form.Input} {...Field.input}/>
                </Form.Field>
                <Form.Field>
                    <label>Receiver's email</label>
                    <Field name="targetEmail" type="text" placeholder="Receiver's email"
                           required={true} component={Form.Input} {...Field.input}/>
                </Form.Field>
                <Form.Group>
                    <Form.Field width="8">
                        <label>Run date</label>
                        <Field name="runDate" type="date" required={true} component={Form.Input} {...Field.input}/>
                    </Form.Field>
                    <Form.Field width="4">
                        <label>Hour</label>
                        <Field required={true} name="runHour" component="select" className="ui dropdown">
                            {runHourOptions}
                        </Field>
                    </Form.Field>
                    <Form.Field width="4">
                        <label>Minute</label>
                        <Field required={true} name="runMinute" component="select" className="ui dropdown">
                            {runMinuteOptions}
                        </Field>
                    </Form.Field>
                </Form.Group>
                <Form.Field>
                    <Form.Button fluid={true} type="submit" color={theme} disabled={isFetching}>
                        Add job
                    </Form.Button>
                </Form.Field>
            </Form>
        );
    }
}));
