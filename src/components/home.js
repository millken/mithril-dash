import m from 'mithril'
import $ from "jquery"

import stream from 'mithril/stream/stream'
const config = require('../config.js')
const jq = require("../utils/jq.js")

import logosvg from '../images/logo-dark.svg'

const togglewrap = stream(false)
const toggle = (s) => s(!s())

const Home = {
    onupdate: function(){
        console.log("update")
    },
    oncreate: function () {
        $("body").attr("class","layout-default page-home")
        jq._positionEl();
        //document.body.classList.add("layout-default");
        //document.body.classList.add("page-home");
    },
    view: function () {
        return m('#body'
            , m('.body-inner-wrapper.container',
                m(".off-canvas-wrap", {className: togglewrap() ? 'move-left': ''},
                    m(".inner-wrap",
                        m("nav.tab-bar.hide-for-large-up",
                            m("section.middle.tab-bar-section",
                                m("a[href=/].navigate.logo", { oncreate: m.route.link },
                                    m("img", { src: logosvg, width: 2001, height: 417 })
                                )
                            ),
                            m("section.right-small",
                                m("a[href=javascript:;].right-off-canvas-toggle.menu-icon", {onclick(){ toggle(togglewrap)}}, m("span"))
                            )
                        ),
                        m(".main-section",
                            m(".row",
                                m("#header.large-2.columns.show-for-large-up",
                                    m("#header-inner-wrapper",
                                        m(".sticky",
                                            m("h1",
                                                m("a[href=/].navigate", { oncreate: m.route.link },
                                                    m("img", { src: logosvg, width: 2001, height: 417 })
                                                )
                                            ),
                                            m("ul.side-nav.text-right", config.menuList.map((item) =>
                                                m('li', m("a[href=/" + item.id + "].navigate", { oncreate: m.route.link }, item.name))
                                            ))
                                        )
                                    )
                                ),
                                m(".large-10.columns",
                                    m("#page.container.row",
                                        m("#content.large-12.medium-12.columns",
                                            m(".row",
                                                m(".large-12.columns",
                                                    m("article.page.page-content",
                                                        m("section#page-content",
                                                            m(".row",
                                                                m(".large-12.columns.text-center",
                                                                    m("h2", "Welcome! Connect your first server now."),
                                                                    m("p.instructions", "Spin up a server at your favorite provider, connect it to ServerPilot, and we'll install everything you need to host PHP apps like WordPress."),
                                                                    m("p",
                                                                        m("a[href=/servers/create].navigate.button.radius", { oncreate: m.route.link }, "Connect a Server")
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        m("aside.right-off-canvas-menu",
                            m("ul.off-canvas-list", config.menuList.map((item) =>
                                m('li', m("a[href=/" + item.id + "].navigate", item.name))
                            )
                            )
                        )
                    )
                )
            )
        )
    }
}

export default Home