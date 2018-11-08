import http from './http'
import api from './api'

let getExampleData = function(params = {}){
    return http.get(api.getExampleData, params)
}

let a = false

export {getExampleData, a};
