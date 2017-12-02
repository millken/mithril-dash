import m from 'mithril'

import logosvg from '../images/logo-dark.svg'

const Signup = {
    view: function() {
        document.body.classList.add("layout-auth");
        document.body.style.overflow = "hidden";
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
                                ),
                                m("form[method=post]",
                                    m("div.row",
                                        m("div.large-12.columns",
                                            m("input[type=email][placeholder='Email']")
                                        )
                                    ),
                                    m("div.row",
                                        m("div.large-12.columns",
                                            m("input[type=password][placeholder='Password']")
                                        )
                                    ),
                                    m("div.row",
                                        m("div.large-12.columns",
                                            m("p.agreetos", "By signing up, you agree to the",
                                                m("a[href='tos.html'][target=_new]", "Terms of Service"),
                                                "."
                                            )
                                        )
                                    ),
                                    m("div.row",
                                        m("div.large-12.columns.button-wrapper",
                                            m("button.button.radius", "Sign Up"),
                                            m("a[href=/login].navigate", "or Log In")
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