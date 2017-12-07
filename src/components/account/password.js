import m from 'mithril'
import $ from "jquery"

const Layout = require('../layout.js')
const Account = require('../account.js')
const jq = require("../../utils/jq.js")

var Body = {
    view: function () {
        return m(".row", 
        m(".large-12.columns.option-group",
          [
            m("h4", 
              "Password"
            ),
            m("hr"),
            m("form[data-abide=''][method='post'][novalidate='novalidate']",
              [
                m(".row",
                  [
                    m(".large-2.columns", 
                      m("label.right.inline[for='email']", 
                        "Email"
                      )
                    ),
                    m(".large-10.columns", 
                      m("input[disabled=''][id='email'][name='email'][placeholder=''][type='text'][value='xx@mail.com']")
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
                      [
                        m("input[id='curpasswd'][name='curpasswd'][placeholder=''][required=''][type='password']"),
                        m("small.error", 
                          "Required."
                        )
                      ]
                    )
                  ]
                ),
                m(".row",
                  [
                    m(".large-2.columns", 
                      m("label.right.inline[for='newpasswd']", 
                        "New Password"
                      )
                    ),
                    m(".large-10.columns",
                      [
                        m("input[id='newpasswd'][name='newpasswd'][placeholder=''][required=''][type='password']"),
                        m("small.error", 
                          "Passwords must be at least 8 characters."
                        )
                      ]
                    )
                  ]
                ),
                m(".row",
                  [
                    m(".large-2.columns", 
                      m("label.right.inline[for='newpasswd-repeat']", 
                        "Repeat New Password"
                      )
                    ),
                    m(".large-10.columns",
                      [
                        m("input[data-equalto='newpasswd'][id='newpasswd-repeat'][name='newpasswd-repeat'][placeholder=''][required=''][type='password']"),
                        m("small.error", 
                          "Passwords must match."
                        )
                      ]
                    )
                  ]
                ),
                m(".row", 
                  m(".large-10.large-offset-2.columns", 
                    m("button.button.radius", 
                      "Update"
                    )
                  )
                )
              ]
            )
          ]
        )
      )
    }
}
const AccountPassword = {
    oncreate: function () {
        $("body").attr("class", "layout-default page-account action-password")
        jq._positionEl();
    },
    view: function () {
        return m(Layout, { class: 'account' },
            m(Account, { class: 'password' },
               m(Body)
            )
        )
    }
}

export default AccountPassword