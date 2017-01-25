/**
 * Created by JHJ on 2017. 1. 25..
 */
"use strict";

import React from 'react';
import { Container, Grid, Segment, Header, Input, Form, Button} from 'semantic-ui-react';


export default React.createClass({
    render(){
        return (
            <Container>
                <Grid centered columns={3} className="stackable">
                    <Grid.Column>
                        <Header as='h4' attached='top' inverted>
                            Login
                        </Header>
                        <Segment attached>
                            <Form>
                                <Form.Field>
                                    <Input icon='user' iconPosition='left' placeholder='ID'/>
                                </Form.Field>
                                <Form.Field>
                                    <Input icon='lock' iconPosition='left' placeholder='Password'/>
                                </Form.Field>
                                <Form.Field>
                                    <Button fluid={true} color="teal">Submit</Button>
                                </Form.Field>
                            </Form>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }
});
