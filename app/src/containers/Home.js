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
                <h3>Scheduler는 pushbullet과 연동하여 자신이 지정한 시간에 push알림이 오도록 설정할 수 있습니다.</h3>
                <h5>문의는 guswnsxodlf@gmail.com으로 해주세요!</h5>
            </Container>
        );
    }
});
