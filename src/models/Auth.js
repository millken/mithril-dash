const m = require('mithril')
const config = require('../config.js')
import Signup from '../components/signup.js'

const Auth = {
    username: '',
    password: '',
    email: '',
    error: '',
    CSRFToken: '',
    getCSRFToken() {
        var t = document.querySelector('input[name=csrftoken]')
        Auth.CSRFToken = t && t.value || ''
    },

    setUsername(value) {
        Auth.username = value || ''
    },
    setPassword(value) {
        Auth.password = value || ''
    },
    setEmail(value) {
        Auth.email = value || ''
    },
    setError(value) {
        Auth.error = value || ''
    },

    canSubmit() {
        return Auth.email !== '' && Auth.password !== ''
    },

    user: {
        id: null,
        name: null,
        token: null,
        loggedIn: false
    },
    errors: {},
    register() {
        m.request({
                method: 'POST',
                url: config.apiPrefix + '/auth/users/create/',
                data: {
                    email: Auth.email,
                    password: Auth.password
                },
                withCredentials: true,
                headers: { 'X-CSRFToken': Auth.CSRFToken }
            })
            .then((data) => {
                if (data.errno > 0) {
                    Auth.error = data.errmsg
                }
                Auth.user.name = data.username
                Auth.user.id = data.id
                Auth.user.registered = true
                    //m.route.set('/app')
            })
            .catch((error) => {
                console.log(error)
                    //Auth.errors = JSON.parse(error.message)
            })
    },
    login() {
        m.request({
                method: 'POST',
                url: config.apiPrefix + '/auth/token/create/',
                data: {
                    username: Auth.username,
                    password: Auth.password
                },
                withCredentials: true,
                headers: { 'X-CSRFToken': Auth.CSRFToken }
            })
            .then((data) => {
                console.log(data)
            })
    }
}

module.exports = Auth