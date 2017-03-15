/**
 * Created by JHJ on 2017. 1. 28..
 */

const data = {};

data.THEME = 'teal';

if(process.env.NODE_ENV === 'production'){
    data.BASE_URL = '';
}else{
    data.BASE_URL = 'http://localhost:1234';
}

export default data;
