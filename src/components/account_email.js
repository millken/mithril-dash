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
            m(".row", 
              m(".large-12.columns", {style: {"text-align": "center", "margin-bottom": "20px"}}, 
                m(".alert-box.secondary.radius[data-alert='']", {style: {"text-align": "center", "margin": "0 auto"}},
                  [
                    m("p", 
                      "Confirming your email address allows faster support and enables you\
              to regain access to your account if you lose your password."
                    ),
                    m("button.button.radius.center[id='send-confirmation-email']", 
                      "Confirm Your Email Address"
                    )
                  ]
                )
              )
            )
          ),
          m(".large-12.columns.option-group",
            [
              m("h4", 
                "Change Email"
              ),
              m("hr"),
              m("form[data-abide=''][method='post'][novalidate='novalidate']",
                [
                  m(".row",
                    [
                      m(".large-2.columns", 
                        m("label.right.inline[for='newemail']", 
                          "New Email"
                        )
                      ),
                      m(".large-10.columns", 
                        m("input[id='newemail'][name='newemail'][required=''][type='text'][value='xx@mail.com']")
                      )
                    ]
                  ),
                  m(".row",
                    [
                      m(".large-2.columns", 
                        m("label.right.inline[for='curpasswd']", 
                          "Current Password"
                        )
                      ),
                      m(".large-10.columns", 
                        m("input[id='curpasswd'][name='curpasswd'][required=''][type='password']")
                      )
                    ]
                  ),
                  m(".row", 
                    m(".large-10.large-offset-2.columns", 
                      m("button.button.radius", 
                        "Change Email Address"
                      )
                    )
                  )
                ]
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
            m(Account, { class: 'email' },
               m(Body)
            )
        )
    }
}

export default AccountBilling