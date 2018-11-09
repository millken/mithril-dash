import http from './http';
import api from './api';

let accountSignup = function(params = {}){
    return http.post(api.accountSignup, params);
};

let a = false;

export {accountSignup, a};
