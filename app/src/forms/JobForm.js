/**
 * Created by JHJ on 2017. 2. 21..
 */
"use strict";

import React from 'react';
import dateFormat from 'dateformat';
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

        runHourOptions.push(<option key='default'/>);
        runMinuteOptions.push(<option key='default'/>);
        for(let i=0;i<60;i++){
            if(i < 24){
                runHourOptions.push(<option key={i} value={i}>{padCharacter(i, 2)}</option>);
            }
            runMinuteOptions.push(<option key={i} value={i}>{padCharacter(i, 2)}</option>);
        }

        return (
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <Field name="name" type="text" placeholder="Name" required={true} label="Name"
                           component={Form.Input} {...Field.input}/>
                </Form.Field>
                <Form.Field>
                    <Field name="message" type="text" placeholder="Message" label="Message"
                           required={true} component={Form.Input} {...Field.input}/>
                </Form.Field>
                <Form.Field>
                    <Field name="targetEmail" type="text" placeholder="Receiver's email" label="Receiver's email"
                           required={true} component={Form.Input} {...Field.input}/>
                </Form.Field>
                <Form.Group>
                    <Form.Field width="8">
                        <Field name="runDate" type="date" required={true} component={Form.Input} label="Run date"
                               min={dateFormat(new Date(), 'yyyy-mm-dd')} {...Field.input}/>
                    </Form.Field>
                    <Form.Field width="4">
                        <div className="required field">
                            <label>Hour</label>
                            <Field required={true} name="runHour" component="select" className="ui dropdown">
                                {runHourOptions}
                            </Field>
                        </div>
                    </Form.Field>
                    <Form.Field width="4">
                        <div className="required field">
                            <label>Minute</label>
                            <Field required={true} name="runMinute" component="select" className="ui dropdown">
                                {runMinuteOptions}
                            </Field>
                        </div>
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
