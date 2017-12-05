import m from 'mithril'

import Home from './components/home.js'
import Login from './components/login.js'
import Signup from './components/signup.js'

const Auth = require('./models/Auth')

import './app.css'
m.route.mode = "pathname";

const root = document.body

m.route(root, '/', {
    '/': {
        onmatch() {
            if (!Auth.user.loggedIn) {
                //m.route.set('/login')
                return Home
            } else {
                return Home
            }
        }
    },
    '/login': Login,
    '/signup': Signup,
})