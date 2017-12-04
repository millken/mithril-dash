import m from 'mithril'
const Auth = require('../models/Auth')
const Box1 = require("./box1.js")

import logosvg from '../images/logo-dark.svg'

const Login = {
    oninit: Auth.getCSRFToken,
    oncreate: function() {
        document.body.classList.add("layout-auth");
        document.body.style.overflow = "hidden";
    },
    view: function() {
        return m('div#body',
            m('div#body-inner-wrapper',
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
                                    m("h2", "Login")
                                ), m(Box1, { title: Auth.error }),
                                m("form[method=post]", {
                                        onsubmit(e) {
                                            e.preventDefault()
                                            Auth.login()
                                        }
                                    },
                                    m("div.row",
                                        m("div.large-12.columns",
                                            m("input[type=email]", { placeholder: "Email", oninput: m.withAttr("value", Auth.setEmail.bind(this)), value: Auth.email }),
                                        )
                                    ),
                                    m("div.row",
                                        m("div.large-12.columns",
                                            m("input[type=password]", { placeholder: "Password", oninput: m.withAttr("value", Auth.setPassword.bind(this)), value: Auth.password }),
                                        )
                                    ),
                                    m("div.row",
                                        m("div.large-12.columns.button-wrapper",
                                            m("button.button.radius", "Log In"),
                                            m("a.navigate", { href: "/signup", oncreate: m.route.link }, "or Sign Up")
                                        )
                                    ),
                                    m("div.row",
                                        m("div.large-12.columns", { id: "forgot-password-link" },
                                            m("a.navigate", { href: "/forgot-password", oncreate: m.route.link }, "Forgot Password?")
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

export default Login