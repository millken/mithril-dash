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
              "API Access"
            ),
            m("hr"),
            m("form[method='post']",
              [
                m(".row",
                  [
                    m(".large-2.columns", 
                      m("label.right.inline[for='clientid']", 
                        "Client ID"
                      )
                    ),
                    m(".large-10.columns", 
                      m("input[name='clientid'][readonly=''][type='text'][value='cid_qE5lgi3QpkhfHced']")
                    )
                  ]
                ),
                m(".row",
                  [
                    m(".large-2.columns", 
                      m("label.right.inline[for='apikey']", 
                        "API Key"
                      )
                    ),
                    m(".large-10.columns", 
                      m("input[id='apikey'][name='apikey'][placeholder=''][readonly=''][type='text'][value='YtC1BivYUFNSSUr34F556ptzFJHk55pSIWDOAFRuvTw']")
                    )
                  ]
                ),
                m(".row", 
                  m(".large-10.large-offset-2.columns",
                    [
                      m(".row", 
                        m(".small-12.columns", 
                          m(".alert-box.success.radius[data-alert='']",
                            [
                              "Please copy your API Key now. It won't be shown again after you log out.",
                              m("a.close[href='#']", 
                                "×"
                              )
                            ]
                          )
                        )
                      ),
                      m("button.button.radius", 
                        "New API Key"
                      )
                    ]
                  )
                )
              ]
            )
          ]
        )
      )
    }
}
const Data = {
    oncreate: function () {
        $("body").attr("class", "layout-default page-account action-api")
        jq._positionEl();
    },
    view: function () {
        return m(Layout, { class: 'account' },
            m(Account, { class: 'api' },
               m(Body)
            )
        )
    }
}

export default Data