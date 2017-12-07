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
              "2-Step Authentication"
            ),
            m("hr"),
            m("p",
              [
                "2-step authentication is currently",
                m("b", 
                  "Disabled"
                ),
                "."
              ]
            ),
            m("h4", 
              "Enable 2-Step Authentication"
            ),
            m(".reveal-modal[data-reveal=''][id='confirm_modal'][role='dialog']", 
              m("div", {style: {"max-width": "550px", "margin-left": "auto", "margin-right": "auto"}},
                [
                  m("p", 
                    m("b", 
                      "We've sent your phone a confirmation code. Please enter it below."
                    )
                  ),
                  m("form[data-abide=''][id='confirm_code'][method='post'][novalidate='novalidate']",
                    [
                      m(".row",
                        [
                          m(".large-2.large-offset-2.columns", 
                            m("label.right.inline[for='code']", 
                              "Code"
                            )
                          ),
                          m(".large-4.columns",
                            [
                              m("input[autocomplete='off'][id='code'][name='code'][pattern='^[0-9]{6}$'][placeholder=''][required=''][type='text']"),
                              m("small.error", 
                                "Code must be a 6-digit number."
                              )
                            ]
                          ),
                          m(".large-4.columns", 
                          )
                        ]
                      ),
                      m(".row", 
                        m(".large-8.large-offset-4.columns",
                          [
                            m("input[id='mfa_phone_confirm'][name='mfa_phone_confirm'][type='hidden']"),
                            m("button.button.radius", 
                              "Confirm"
                            )
                          ]
                        )
                      )
                    ]
                  )
                ]
              )
            ),
            m("form[data-abide=''][id='enable_mfa'][novalidate='novalidate']",
              [
                m(".row",
                  [
                    m(".large-2.columns", 
                      m("label.right.inline[for='countrycode']", 
                        "Country Code"
                      )
                    ),
                    m(".large-10.columns", 
                      m("select[id='countrycode'][name='countrycode']",
                        [
                          m("option[value='+1']", 
                            "United States +1"
                          ),
                          m("option[value='+358']", 
                            "Aland Islands +358"
                          ),
                          m("option[value='+213']", 
                            "Algeria +213"
                          ),
                          m("option[value='+244']", 
                            "Angola +244"
                          ),
                          m("option[value='+1264']", 
                            "Anguilla +1264"
                          ),
                          m("option[value='+61']", 
                            "Australia +61"
                          ),
                          m("option[value='+43']", 
                            "Austria +43"
                          ),
                          m("option[value='+1']", 
                            "Bahamas +1"
                          ),
                          m("option[value='+973']", 
                            "Bahrain +973"
                          ),
                          m("option[value='+880']", 
                            "Bangladesh +880"
                          ),
                          m("option[value='+375']", 
                            "Belarus +375"
                          ),
                          m("option[value='+32']", 
                            "Belgium +32"
                          ),
                          m("option[value='+229']", 
                            "Benin +229"
                          ),
                          m("option[value='+591']", 
                            "Bolivia +591"
                          ),
                          m("option[value='+387']", 
                            "Bosnia and Herzegovina +387"
                          ),
                          m("option[value='+673']", 
                            "Brunei +673"
                          ),
                          m("option[value='+359']", 
                            "Bulgaria +359"
                          ),
                          m("option[value='+257']", 
                            "Burundi +257"
                          ),
                          m("option[value='+855']", 
                            "Cambodia +855"
                          ),
                          m("option[value='+1']", 
                            "Canada +1"
                          ),
                          m("option[value='+238']", 
                            "Cape Verde +238"
                          ),
                          m("option[value='+1345']", 
                            "Cayman Islands +1345"
                          ),
                          m("option[value='+61']", 
                            "Christmas Island +61"
                          ),
                          m("option[value='+61']", 
                            "Cocos +61"
                          ),
                          m("option[value='+243']", 
                            "Congo, Dem Rep +243"
                          ),
                          m("option[value='+385']", 
                            "Croatia +385"
                          ),
                          m("option[value='+357']", 
                            "Cyprus +357"
                          ),
                          m("option[value='+420']", 
                            "Czech Republic +420"
                          ),
                          m("option[value='+45']", 
                            "Denmark +45"
                          ),
                          m("option[value='+1767']", 
                            "Dominica +1767"
                          ),
                          m("option[value='+1']", 
                            "Dominican Republic +1"
                          ),
                          m("option[value='+593']", 
                            "Ecuador +593"
                          ),
                          m("option[value='+240']", 
                            "Equatorial Guinea +240"
                          ),
                          m("option[value='+372']", 
                            "Estonia +372"
                          ),
                          m("option[value='+358']", 
                            "Finland/Aland Islands +358"
                          ),
                          m("option[value='+33']", 
                            "France +33"
                          ),
                          m("option[value='+220']", 
                            "Gambia +220"
                          ),
                          m("option[value='+995']", 
                            "Georgia +995"
                          ),
                          m("option[value='+49']", 
                            "Germany +49"
                          ),
                          m("option[value='+233']", 
                            "Ghana +233"
                          ),
                          m("option[value='+350']", 
                            "Gibraltar +350"
                          ),
                          m("option[value='+30']", 
                            "Greece +30"
                          ),
                          m("option[value='+502']", 
                            "Guatemala +502"
                          ),
                          m("option[value='+592']", 
                            "Guyana +592"
                          ),
                          m("option[value='+36']", 
                            "Hungary +36"
                          ),
                          m("option[value='+354']", 
                            "Iceland +354"
                          ),
                          m("option[value='+62']", 
                            "Indonesia +62"
                          ),
                          m("option[value='+98']", 
                            "Iran +98"
                          ),
                          m("option[value='+353']", 
                            "Ireland +353"
                          ),
                          m("option[value='+972']", 
                            "Israel +972"
                          ),
                          m("option[value='+39']", 
                            "Italy +39"
                          ),
                          m("option[value='+225']", 
                            "Ivory Coast +225"
                          ),
                          m("option[value='+1876']", 
                            "Jamaica +1876"
                          ),
                          m("option[value='+81']", 
                            "Japan +81"
                          ),
                          m("option[value='+962']", 
                            "Jordan +962"
                          ),
                          m("option[value='+7']", 
                            "Kazakhstan +7"
                          ),
                          m("option[value='+965']", 
                            "Kuwait +965"
                          ),
                          m("option[value='+371']", 
                            "Latvia +371"
                          ),
                          m("option[value='+218']", 
                            "Libya +218"
                          ),
                          m("option[value='+423']", 
                            "Liechtenstein +423"
                          ),
                          m("option[value='+370']", 
                            "Lithuania +370"
                          ),
                          m("option[value='+352']", 
                            "Luxembourg +352"
                          ),
                          m("option[value='+261']", 
                            "Madagascar +261"
                          ),
                          m("option[value='+265']", 
                            "Malawi +265"
                          ),
                          m("option[value='+60']", 
                            "Malaysia +60"
                          ),
                          m("option[value='+960']", 
                            "Maldives +960"
                          ),
                          m("option[value='+223']", 
                            "Mali +223"
                          ),
                          m("option[value='+356']", 
                            "Malta +356"
                          ),
                          m("option[value='+230']", 
                            "Mauritius +230"
                          ),
                          m("option[value='+52']", 
                            "Mexico +52"
                          ),
                          m("option[value='+377']", 
                            "Monaco +377"
                          ),
                          m("option[value='+382']", 
                            "Montenegro +382"
                          ),
                          m("option[value='+1664']", 
                            "Montserrat +1664"
                          ),
                          m("option[value='+258']", 
                            "Mozambique +258"
                          ),
                          m("option[value='+264']", 
                            "Namibia +264"
                          ),
                          m("option[value='+31']", 
                            "Netherlands +31"
                          ),
                          m("option[value='+599']", 
                            "Netherlands Antilles +599"
                          ),
                          m("option[value='+64']", 
                            "New Zealand +64"
                          ),
                          m("option[value='+234']", 
                            "Nigeria +234"
                          ),
                          m("option[value='+47']", 
                            "Norway +47"
                          ),
                          m("option[value='+63']", 
                            "Philippines +63"
                          ),
                          m("option[value='+48']", 
                            "Poland +48"
                          ),
                          m("option[value='+351']", 
                            "Portugal +351"
                          ),
                          m("option[value='+974']", 
                            "Qatar +974"
                          ),
                          m("option[value='+40']", 
                            "Romania +40"
                          ),
                          m("option[value='+7']", 
                            "Russia +7"
                          ),
                          m("option[value='+250']", 
                            "Rwanda +250"
                          ),
                          m("option[value='+221']", 
                            "Senegal +221"
                          ),
                          m("option[value='+381']", 
                            "Serbia +381"
                          ),
                          m("option[value='+248']", 
                            "Seychelles +248"
                          ),
                          m("option[value='+65']", 
                            "Singapore +65"
                          ),
                          m("option[value='+421']", 
                            "Slovakia +421"
                          ),
                          m("option[value='+386']", 
                            "Slovenia +386"
                          ),
                          m("option[value='+27']", 
                            "South Africa +27"
                          ),
                          m("option[value='+82']", 
                            "South Korea +82"
                          ),
                          m("option[value='+34']", 
                            "Spain +34"
                          ),
                          m("option[value='+94']", 
                            "Sri Lanka +94"
                          ),
                          m("option[value='+1758']", 
                            "St Lucia +1758"
                          ),
                          m("option[value='+249']", 
                            "Sudan +249"
                          ),
                          m("option[value='+46']", 
                            "Sweden +46"
                          ),
                          m("option[value='+41']", 
                            "Switzerland +41"
                          ),
                          m("option[value='+886']", 
                            "Taiwan +886"
                          ),
                          m("option[value='+255']", 
                            "Tanzania +255"
                          ),
                          m("option[value='+228']", 
                            "Togo +228"
                          ),
                          m("option[value='+1868']", 
                            "Trinidad and Tobago +1868"
                          ),
                          m("option[value='+1649']", 
                            "Turks and Caicos Islands +1649"
                          ),
                          m("option[value='+256']", 
                            "Uganda +256"
                          ),
                          m("option[value='+380']", 
                            "Ukraine +380"
                          ),
                          m("option[value='+971']", 
                            "United Arab Emirates +971"
                          ),
                          m("option[value='+44']", 
                            "United Kingdom +44"
                          ),
                          m("option[value='+1']", 
                            "United States +1"
                          ),
                          m("option[value='+998']", 
                            "Uzbekistan +998"
                          ),
                          m("option[value='+58']", 
                            "Venezuela +58"
                          )
                        ]
                      )
                    )
                  ]
                ),
                m(".row",
                  [
                    m(".large-2.columns", 
                      m("label.right.inline[for='email']", 
                        "Phone"
                      )
                    ),
                    m(".large-10.columns",
                      [
                        m("input[id='mfa_phone'][name='mfa_phone'][placeholder=''][required=''][type='text']"),
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
                  m(".large-10.large-offset-2.columns", 
                    m("button.button.radius", 
                      "Enable 2-Step Authentication"
                    )
                  )
                )
              ]
            ),
            m("[id='disable_mfa_block']", {style: {"display": "none"}},
              [
                m("h4", 
                  "Disable 2-Step Authentication"
                ),
                m("form[data-abide=''][id='disable_mfa'][novalidate='novalidate']",
                  [
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
                      m(".large-10.large-offset-2.columns", 
                        m("button.button.radius", 
                          "Disable"
                        )
                      )
                    )
                  ]
                )
              ]
            )
          ]
        )
      )
    }
}
const AccountMfa = {
    oncreate: function () {
        $("body").attr("class", "layout-default page-account action-mfa")
        jq._positionEl();
    },
    view: function () {
        return m(Layout, { class: 'account' },
            m(Account, { class: 'mfa' },
               m(Body)
            )
        )
    }
}

export default AccountMfa