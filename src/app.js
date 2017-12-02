import m from 'mithril'

import Home from './components/home.js'
import Login from './components/login.js'
import Signup from './components/signup.js'
import './app.css'
m.route.mode = "pathname";


m.route(document.body, '/', {
    '/': Home,
    '/login': Login,
    '/signup': Signup,
})