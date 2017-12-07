import m from 'mithril'
import $ from "jquery"

const Layout = require('./layout.js')
const Account = require('./account.js')
const jq = require("../utils/jq.js")

var Body = {
    view: function () {
        return m(".row",
        [
          m(".large-12.columns.option-group",
            [
              m(".row", 
                m(".small-12.columns", 
                  m("a.button.upgrade-billing.radius.right[href='#']", 
                    "Update Credit Card"
                  )
                )
              ),
              m(".row[data-equalizer='']",
                [
                  m(".large-4.columns.current-plan[data-equalizer-watch='']", {style: {"height": "590px"}}, 
                    m("ul.pricing-table",
                      [
                        m("li.title", 
                          "Free"
                        ),
                        m("li.price", 
                          "0"
                        ),
                        m("li.description", 
                          "always free"
                        ),
                        m("li.bullet-item", 
                          m("strong", 
                            "Unlimited servers"
                          )
                        ),
                        m("li.bullet-item", 
                          "Unlimited apps"
                        ),
                        m("li.bullet-item", 
                          "One SSH/SFTP user"
                        ),
                        m("li.bullet-item", 
                          "Firewall configuration"
                        ),
                        m("li.bullet-item", 
                          "Server security updates"
                        ),
                        m("li.bullet-item", 
                          "API access"
                        ),
                        m("li.cta-button", 
                          m("b", 
                            "Current Plan"
                          )
                        )
                      ]
                    )
                  ),
                  m(".large-4.columns.[data-equalizer-watch='']", {style: {"height": "590px"}}, 
                    m("ul.pricing-table",
                      [
                        m("li.title", 
                          "Coach"
                        ),
                        m("li.price", 
                          "10"
                        ),
                        m("li.description", 
                          "per server"
                        ),
                        m("li.bullet-item", 
                          m("strong", 
                            "Free features +"
                          )
                        ),
                        m("li.bullet-item", 
                          "Priority support"
                        ),
                        m("li.bullet-item", 
                          "Unlimited SSH/SFTP users"
                        ),
                        m("li.bullet-item", 
                          "SSL deployment"
                        ),
                        m("li.bullet-item", 
                          "HTTP/2 support"
                        ),
                        m("li.bullet-item", 
                          "Server health stats"
                        ),
                        m("li.cta-button", 
                          "Credit Card Required"
                        )
                      ]
                    )
                  ),
                  m(".large-4.columns.[data-equalizer-watch='']", {style: {"height": "590px"}}, 
                    m("ul.pricing-table",
                      [
                        m("li.title", 
                          "Business"
                        ),
                        m("li.price", 
                          "49"
                        ),
                        m("li.description", 
                          "per server"
                        ),
                        m("li.bullet-item", 
                          m("strong", 
                            "Coach features +"
                          )
                        ),
                        m("li.bullet-item", 
                          "High priority support"
                        ),
                        m("li.bullet-item", 
                          "App resource usage stats"
                        ),
                        m("li.bullet-item", 
                          "App request stats"
                        ),
                        m("li.bullet-item", 
                          "Slow script notifications"
                        ),
                        m("li.bullet-item", 
                          "Log viewer"
                        ),
                        m("li.cta-button", 
                          "Credit Card Required"
                        )
                      ]
                    )
                  )
                ]
              ),
              m(".row[id='delete-ssl-before-downgrading']", {style: {"display": "none"}}, 
                m(".small-12.columns", 
                  m(".alert-box.secondary.radius[data-alert='']", {style: {"font-size": "16px", "padding-top": "20px"}},
                    [
                      m("b", 
                        "SSL is a paid feature and is not supported on the Free plan. You must disable SSL on the following apps before downgrading:"
                      ),
                      m("br"),
                      m("br"),
                      m("ul[id='apps-with-ssl']", {style: {"margin-bottom": "0"}})
                    ]
                  )
                )
              ),
              m(".row[id='warn-about-sysusers-before-downgrading']", {style: {"display": "none"}}, 
                m(".small-12.columns", 
                  m(".alert-box.secondary.radius[data-alert='']", {style: {"font-size": "16px", "padding-top": "20px"}},
                    [
                      m("b", 
                        "Additional system users are a paid feature and are not supported on the Free plan."
                      ),
                      m("br"),
                      m("br"),
                      "You will not be able to upgrade your account back to a paid plan if you downgrade without deleting the following system users and their apps:",
                      m("br"),
                      m("br"),
                      m("ul[id='additional-system-users']", {style: {"margin-bottom": "0"}}),
                      m("br"),
                      m("br"),
                      m("button[id='confirm-downgrade']", {style: {"margin-bottom": "0"}}, 
                        "I will not upgrade again. Downgrade my account now."
                      )
                    ]
                  )
                )
              )
            ]
          ),
          m("style", 
            "#billing-history .row { padding: 20px 0; border-top: 1px solid #eee; margin: 0; } #billing-history .row:first-child { font-weight: bold; border-top: 0; }"
          ),
          m(".large-12.columns.option-group",
            [
              m("h4", 
                "Billing History"
              ),
              m("hr"),
              m("[id='billing-history']", 
                m(".row",
                  [
                    m(".small-4.columns.date", 
                      "Date"
                    ),
                    m(".small-4.columns.description", 
                      "Description"
                    ),
                    m(".small-2.columns.amount", 
                      "Amount"
                    ),
                    m(".small-2.columns.view-invoice")
                  ]
                )
              )
            ]
          )
        ]
      )
    }
}
const AccountBilling = {
    oncreate: function () {
        $("body").attr("class", "layout-default page-account action-billing")
        jq._positionEl();
    },
    view: function () {
        return m(Layout, { class: 'account' },
            m(Account, { class: 'billing' },
               m(Body)
            )
        )
    }
}

export default AccountBilling