/**
 * Created by JHJ on 2017. 1. 28..
 */

const data = {};

data.THEME = 'teal';

if(DEVELOPMENT){
    data.BASE_URL = 'http://localhost:1234';
}else if(PRODUCTION){
    data.BASE_URL = '';
}

export default data;
