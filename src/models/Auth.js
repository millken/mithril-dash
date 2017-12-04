const m = require('mithril')
const config = require('../config.js')
const localstorage = require('../models/Localstorage')
const Box1 = require("../components/box1.js")

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
    setToken(value) {
        localstorage.set('token', value)
    },
    getToken() {
        return localstorage.get('token')
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
                    Box1.show()
                } else {
                    Auth.error = ''
                    Box1.hide()
                    Auth.user.email = data.email
                    Auth.user.id = data.uid
                    Auth.user.loggedIn = true
                    m.route.set('/')
                }
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
                    email: Auth.email,
                    password: Auth.password
                },
                withCredentials: true,
                headers: { 'X-CSRFToken': Auth.CSRFToken }
            })
            .then((data) => {
                if (data.errno > 0) {
                    Auth.error = data.errmsg
                    Box1.show()
                } else {
                    Auth.error = ''
                    Box1.hide()
                    Auth.user.email = data.email
                    Auth.user.id = data.uid
                    Auth.user.loggedIn = true
                    m.route.set('/')
                }
            })
    }
}

module.exports = Auth