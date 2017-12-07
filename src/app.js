import m from 'mithril'

import Home from './components/home.js'
import Login from './components/login.js'
import Signup from './components/signup.js'
import Servers from './components/servers.js'
import ServersNew from './components/servers_new.js'
import Apps from './components/apps.js'
import AccountBilling from './components/account_billing.js'
import AccountEmail from './components/account_email.js'
import AccountPassword from './components/account/password'
import AccountMfa from './components/account/mfa'
import AccountApi from './components/account/api'
import AccountProfile from './components/account/profile'
import Support from './components/support'

const Auth = require('./models/Auth')

import './app.css'
//import 'font-awesome/css/font-awesome.css';

m.route.mode = "pathname";
m.route.prefix("");

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
    '/servers': Servers,
    '/servers/new': ServersNew,
    '/apps': Apps,
    '/account': {
        onmatch() {
            m.route.set('/account/billing')
        }
    },
    '/account/billing': AccountBilling,
    '/account/email': AccountEmail,
    '/account/password': AccountPassword,
    '/account/mfa': AccountMfa,
    '/account/api': AccountApi,
    '/account/profile': AccountProfile,
    '/support': Support,
})