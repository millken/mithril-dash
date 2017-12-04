import m from 'mithril'
import stream from 'mithril/stream/stream'
const Auth = require('../models/Auth')
const config = require('../config.js')
const Box1 = require("./box1.js")

import logosvg from '../images/logo-dark.svg'

const toggle = (s) => s(!s());

const visible = stream(false);

const Modal = {
    view(vnode) {
        return m('div.row', {className: Signup.showAlert() ? '': 'hide'}, [
            m('.small-12.columns',
                m(".alert-box.warning.radius",
                    vnode.attrs.title,
                    m("a[href=javascript::;].close", {onclick:function(){Signup.showAlert(false)}}, "×")
                )
            )
        ])
    }
}
const Signup = {
    showAlert: stream(false),
    error:'',
    email: "",
    password: "",
    setEmail: function(value) {
        this.email = value
    },
    setPassword: function(value) {
        this.password = value
    },
    canSubmit: function() {
        return this.email !== "" && this.password !== ""
    },
    signup: function() { 
        Auth.error = "ok, err"
        Box1.show()
     },
    oninit: Auth.getCSRFToken,
    oncreate: function() {
        document.body.classList.add("layout-auth");
        document.body.style.overflow = "hidden";
    },
    view: function() {
        
        return m("div#body",
            m("div#body-inner-wrapper",
                m("div#page.container",
                    m("div.row",
                        m("div.large-3.medium-4.small-7.columns.large-centered.medium-centered.small-centered.logo-wrapper",
                            m("img", { src: logosvg, width: 2001, height: 417 })
                        )
                    ),
                    m("div.row",
                        m("div#auth-form.large-6.columns.large-centered",
                            m("div",
                                m("div.heading",
                                    m("h2", "Sign Up")
                                ),  m(Box1, {title: Auth.error}),
                                m("form[method=post]", {
                                        onsubmit(e) {
                                            e.preventDefault()
                                            Auth.register()
                                        }
                                    },
                                    m("div.row",
                                        m("div.large-12.columns",
                                            m("input[type=email][placeholder='Email']", { oninput: m.withAttr("value", Auth.setEmail.bind(this)), value: Auth.email })
                                        )
                                    ),
                                    m("div.row",
                                        m("div.large-12.columns",
                                            m("input[type=password][placeholder='Password']", { oninput: m.withAttr("value", Auth.setPassword.bind(this)), value: Auth.password })
                                        )
                                    ),
                                    m("div.row",
                                        m("div.large-12.columns",
                                            m("p.agreetos", "By signing up, you agree to the",
                                                m("a[href='tos.html'][target=_new]", { oncreate: m.route.link }, "Terms of Service"),
                                                "."
                                            )
                                        )
                                    ),
                                    m("div.row",
                                        m("div.large-12.columns.button-wrapper",
                                            m("button.button.radius", { submit: true, primary: true, disabled: !Auth.canSubmit() }, "Sign Up"),
                                            m("a[href=/login].navigate", { oncreate: m.route.link }, "or Log In")
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            )

        )
    }
}

export default Signup