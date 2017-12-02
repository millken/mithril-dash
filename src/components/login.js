import m from 'mithril'

import logosvg from '../images/logo-dark.svg'

const Login = {
    username: "",
    password: "",
    setUsername: function(value) {
        this.username = value
    },
    setPassword: function(value) {
        this.password = value
    },
    canSubmit: function() {
        return this.username !== "" && this.password !== ""
    },
    login: function() { /*...*/ },
    view: function() {
        document.body.classList.add("layout-auth");
        return m('div', { id: "body" }, m('div', { id: "body-inner-wrapper" },
            m('div', { id: "page", class: "container" }, m("div", { class: "row" },
                    m("div", { class: "large-3 medium-4 small-7 columns large-centered medium-centered small-centered logo-wrapper" },
                        m("img", { src: logosvg, width: 2001, height: 417 })
                    )
                ),
                m("div", { class: "row" }, m("div", { id: "auth-form", class: "large-6 columns large-centered" },
                    m("div", m("div", { class: "heading" }, m("h2", "Login")),
                        m("form", { method: "post" }, m("div", { class: "row" }, m("div", { class: "large-12 columns" },
                                m("input[type=email]", { placeholder: "Email", oninput: m.withAttr("value", this.setUsername.bind(this)), value: this.username }),
                            )), m("div", { class: "row" }, m("div", { class: "large-12 columns" },
                                m("input[type=password]", { placeholder: "Password", oninput: m.withAttr("value", this.setPassword.bind(this)), value: this.password }),
                            )), m("div.row", m("div.large-12.columns.button-wrapper", m("button.button.radius", "Log In"),
                                m("a.navigate", { href: "/signup" }, "or Sign Up"))),
                            m("div.row", m("div.large-12.columns", { id: "forgot-password-link" }, m("a.navigate", { href: "/forgot-password" }, "Forgot Password?"))), )
                    )
                )))
        ))
    }
}

export default Login