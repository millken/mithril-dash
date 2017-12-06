import m from 'mithril'
const Layout = require('./layout.js')

const Servers = {
    oncreate: function () {
        document.body.classList.add("layout-default");
        document.body.classList.add("page-servers");
    },
    view: function () {
        return m(Layout, {class: 'servers'},
            m("header#page-header.row",
                m(".large-12.columns",
                    m("h2.page-title", "Servers"),
                    m("p",
                        m("a[href=/servers/new].navigate.button.right.radius",
                            m("i.icon.icon-plus"), "Connect Server"
                        )
                    )
                )
            ),
            m("section#page-content",
                m(".row.collapse",
                    m(".server-filter.large-4.end",
                        m("i.icon.icon-search"),
                        m("input[type=text][placeholder=Search Servers]")
                    ),
                    m(".server-sort.large-12.show-for-large-up",
                        m(".large-6.columns.server-name",
                            m("p", m("a[href=javascript:;][data-sort=name]", "Server"))
                        )
                    ),
                    m(".server-list.large-12.full-width")
                )
            )
        )
    }
}

export default Servers