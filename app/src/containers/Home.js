/**
 * Created by JHJ on 2017. 1. 19..
 */
"use strict";

import React from 'react';
import { Container, Grid } from 'semantic-ui-react';


export default React.createClass({
    render(){
        return (
            <Container>
                <h1>반갑습니다! Scheduler에 오신 것을 환영합니다.</h1>
                <h3>Scheduler는 Pushbullet과 연동하여 지정한 시간에 push알림이 오도록 설정할 수 있습니다.</h3>
                <h3>회원가입이나 궁금한 것은 무엇이든지 guswnsxodlf@gmail.com으로 연락해주세요!</h3>
                <br/>
                <h1>Welcome to Scheduler!</h1>
                <h3>Scheduler makes you get the push alarm at any time you want by using Pushbullet.</h3>
                <h3>Contact me to guswnsxodlf@gmail.com for sign in or anything!</h3>
            </Container>
        );
    }
});
