/**
 * Created by JHJ on 2017. 1. 28..
 */

let data = {};

if(DEVELOPMENT){
    data.base_url = 'loacalhost:8000/';
}else if(PRODUCTION){
    data.base_url = '';
}

export default data;
