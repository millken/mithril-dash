import m from 'mithril'
import $ from "jquery"

const Layout = require('./layout.js')
const jq = require("../utils/jq.js")

const ServersNew = {
    oncreate: function () {
        $("body").attr("class","layout-default page-new-server")
        jq._positionEl();
    },
    view: function () {
        return m(Layout, { class: 'servers' },
            m("header#page-header.row",
                m(".large-12.columns",
                    m("h2.page-title", "Connect a Servers")
                )
            ),
            m("section#page-content",
                m(".row",
                    m(".large-12.columns.option",
                        m(".row",
                            m("#server-requirements.small-12.columns[style=margin-top: -10px; margin-bottom: 16px;]",
                                m(".panel.callout.radius", "Your server must be Ubuntu 16.04 (64-bit).<br><br>Only clean servers (no Nginx, Apache, or MySQL installed) can be connected to ServerPilot."
                                )
                            )
                        )
                    )
                ),
                m("form",
                    m(".row",
                        m(".small-2.columns",
                            m("label[for=host]", { className: "right inline error", role: "alert" },
                                m("i.required"), "IP Address"
                            )
                        ),
                        m(".small-10.columns.error",
                            m("input[type=text][name=host][placeholder=Your server's IP address]"),
                            m("small.error", 'IP address must be an IPv4 address like "1.2.3.4".')
                        )
                    ),
                    m(".row",
                        m(".small-2.columns",
                            m("label[for=rootpw]", { className: "right inline error", role: "alert" },
                                m("i.required"), "Root Password"
                            )
                        ),
                        m(".small-10.columns.error",
                            m("input[type=text][name=rootpw][placeholder=Your server's SSH password for 'root']"),
                            m("small.error", 'SSH root password is required for automatic installation.')
                        )
                    ),
                    m(".row",
                        m(".small-2.columns"),
                        m(".small-10.columns[style=top:-8px;]",
                            m("input[type=checkbox][id=manual][name=manual]"),
                            m("label[for=manual].inline",
                                m("span.has-tip[style=font-weight:normal]", "I don't have a root password or public IP address."),
                                "(Requires manual install.)"
                            )
                        )
                    ),
                    m(".row",
                        m(".small-2.columns",
                            m("p")
                        ),
                        m(".small-10.columns",
                            m("button.button.radius", "Connect to Server")
                        )
                    )
                )
            )
        )
    }
}

export default ServersNew