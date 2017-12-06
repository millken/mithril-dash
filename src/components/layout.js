import m from 'mithril'
import $ from "jquery"
import stream from 'mithril/stream/stream'
const config = require('../config.js')

import logosvg from '../images/logo-dark.svg'

const a = {
    _positionEl: function () {
        var e = $("#header-inner-wrapper"),
            n = $(".sticky", e);
        n.css({
            left: e.offset().left + "px",
            width: e.width() + "px"
        })
    },
}
$(function () {
    console.log("tester")
    //$("#header-inner-wrapper>.sticky").css({left:413+"px", width:"170px"})
    $(window).resize(function () {
        a._positionEl()
    });
    a._positionEl()
})

const togglewrap = stream(false)
const toggle = (s) => s(!s())

const Layout = {
    view(vnode) {
        return m('#body'
            , m('.body-inner-wrapper.container',
                m(".off-canvas-wrap", { className: togglewrap() ? 'move-left' : '' },
                    m(".inner-wrap",
                        m("nav.tab-bar.hide-for-large-up",
                            m("section.middle.tab-bar-section",
                                m("a[href=/].navigate.logo", { oncreate: m.route.link },
                                    m("img", { src: logosvg, width: 2001, height: 417 })
                                )
                            ),
                            m("section.right-small",
                                m("a[href=javascript:;].right-off-canvas-toggle.menu-icon", { onclick() { toggle(togglewrap) } }, m("span"))
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
                                                m('li', { className: vnode.attrs.class == item.id ? 'active' : '' }, m("a[href=/" + item.id + "].navigate", { oncreate: m.route.link }, item.name))
                                            ))
                                        )
                                    )
                                ),
                                m(".large-10.columns",
                                    m("#page.container.row",
                                        m("#content.large-12.medium-12.columns",
                                            m(".row",
                                                m(".large-12.columns",
                                                    m("article.page.page-content", vnode.children)
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

module.exports = Layout