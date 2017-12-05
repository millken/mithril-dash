import m from 'mithril'
import $ from "jquery"

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
    $("a.right-off-canvas-toggle").click(function(){
        $(".off-canvas-wrap").toggleClass("move-left")
    })
    a._positionEl()
})
const navlist = [
    { 'id': 'servers', 'name': 'Servers' },
    { 'id': 'app', 'name': 'App' },
    { 'id': 'account', 'name': 'Account' },
    { 'id': 'support', 'name': 'Support' },
    { 'id': 'logout', 'name': 'Log out' }
];

const Home = {
    oncreate: function () {
        document.body.classList.add("layout-default");
        document.body.classList.add("page-home");
    },
    view: function () {
        return m('#body'
            , m('.body-inner-wrapper.container',
                m(".off-canvas-wrap",
                    m(".inner-wrap",
                        m("nav.tab-bar.hide-for-large-up",
                            m("section.middle.tab-bar-section",
                                m("a[href=/].navigate.logo",
                                    m("img", { src: logosvg, width: 2001, height: 417 })
                                )
                            ),
                            m("section.right-small",
                                m("a[href=javascript:;].right-off-canvas-toggle.menu-icon", m("span"))
                            )
                        ),
                        m(".main-section",
                            m(".row",
                                m("#header.large-2.columns.show-for-large-up",
                                    m("#header-inner-wrapper",
                                        m(".sticky",
                                            m("h1",
                                                m("a[href=/].navigate",
                                                    m("img", { src: logosvg, width: 2001, height: 417 })
                                                )
                                            ),
                                            m("ul.side-nav.text-right", navlist.map((item) =>
                                                m('li', m("a[href=/" + item.id + "].navigate", item.name))
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
                                                                        m("a[href=/servers/create].navigate.button.radius", "Connect a Server")
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
                            m("ul.off-canvas-list", navlist.map((item) =>
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