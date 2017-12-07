import m from 'mithril'
import $ from "jquery"

const Layout = require('./layout.js')
const jq = require("../utils/jq.js")

const Apps = {
    oncreate: function () {
        $("body").attr("class","layout-default page-apps")
        jq._positionEl();
    },
    view: function () {
        return m(Layout, { class: 'apps' },
            m("header#page-header.row",
                m(".large-12.columns",
                    m("h2.page-title", "Apps")
                )
            ),
            m("section#page-content",
                m(".row.collapse",
                    m(".app-filter.large-4.end",
                        m("i.icon.icon-search"),
                        m("input[type=text][placeholder=Search Apps]")
                    ),
                    m(".app-sort.large-12.show-for-large-up",
                        m(".large-4.columns.app-name",
                            m("p", m("a[href=javascript:;][data-sort=name]", "App"))
                        ),
                        m(".large-4.columns.app-server",
                            m("p", m("a[href=javascript:;][data-sort=server]", "Server"))
                        )
                    ),
                    m(".server-list.large-12.full-width")
                )
            )
        )
    }
}

export default Apps