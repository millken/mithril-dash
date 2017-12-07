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
              "Change Profile"
            ),
            m("hr"),
            m("p", 
              "The information you provide below will be shown on your invoices."
            ),
            m("form[data-abide=''][method='post'][novalidate='novalidate']",
              [
                m(".row",
                  [
                    m(".large-2.columns", 
                      m("label.right.inline[for='name']", 
                        "Full Name"
                      )
                    ),
                    m(".large-10.columns", 
                      m("input[id='name'][maxlength='50'][name='name'][type='text'][value='']")
                    )
                  ]
                ),
                m(".row",
                  [
                    m(".large-2.columns", 
                      m("label.right.inline[for='phone']", 
                        "Phone Number"
                      )
                    ),
                    m(".large-10.columns", 
                      m("input[id='phone'][maxlength='20'][name='phone'][type='text'][value='']")
                    )
                  ]
                ),
                m(".row",
                  [
                    m(".large-2.columns", 
                      m("label.right.inline[for='company']", 
                        "Company"
                      )
                    ),
                    m(".large-10.columns", 
                      m("input[id='company'][maxlength='50'][name='company'][type='text'][value='']")
                    )
                  ]
                ),
                m(".row",
                  [
                    m(".large-2.columns", 
                      m("label.right.inline[for='address']", 
                        "Address"
                      )
                    ),
                    m(".large-10.columns", 
                      m("input[id='address'][maxlength='100'][name='address'][type='text'][value='']")
                    )
                  ]
                ),
                m(".row",
                  [
                    m(".large-2.columns", 
                      m("label.right.inline[for='city']", 
                        "City"
                      )
                    ),
                    m(".large-10.columns", 
                      m("input[id='city'][maxlength='50'][name='city'][type='text'][value='']")
                    )
                  ]
                ),
                m(".row",
                  [
                    m(".large-2.columns", 
                      m("label.right.inline[for='state']", 
                        "State/Province"
                      )
                    ),
                    m(".large-10.columns", 
                      m("input[id='state'][maxlength='50'][name='state'][type='text'][value='']")
                    )
                  ]
                ),
                m(".row",
                  [
                    m(".large-2.columns", 
                      m("label.right.inline[for='postalcode']", 
                        "Postal Code"
                      )
                    ),
                    m(".large-10.columns", 
                      m("input[id='postalcode'][maxlength='20'][name='postalcode'][type='text'][value='']")
                    )
                  ]
                ),
                m(".row",
                  [
                    m(".large-2.columns", 
                      m("label.right.inline[for='country']", 
                        "Country"
                      )
                    ),
                    m(".large-10.columns", 
                      m("select[name='country']",
                        [
                          m("option[value='']"),
                          m("option[value='US']", 
                            "United States"
                          ),
                          m("option[value='AF']", 
                            "Afghanistan"
                          ),
                          m("option[value='AX']", 
                            "Åland Islands"
                          ),
                          m("option[value='AL']", 
                            "Albania"
                          ),
                          m("option[value='DZ']", 
                            "Algeria"
                          ),
                          m("option[value='AS']", 
                            "American Samoa"
                          ),
                          m("option[value='AD']", 
                            "Andorra"
                          ),
                          m("option[value='AO']", 
                            "Angola"
                          ),
                          m("option[value='AI']", 
                            "Anguilla"
                          ),
                          m("option[value='AQ']", 
                            "Antarctica"
                          ),
                          m("option[value='AG']", 
                            "Antigua and Barbuda"
                          ),
                          m("option[value='AR']", 
                            "Argentina"
                          ),
                          m("option[value='AM']", 
                            "Armenia"
                          ),
                          m("option[value='AW']", 
                            "Aruba"
                          ),
                          m("option[value='AU']", 
                            "Australia"
                          ),
                          m("option[value='AT']", 
                            "Austria"
                          ),
                          m("option[value='AZ']", 
                            "Azerbaijan"
                          ),
                          m("option[value='BS']", 
                            "Bahamas"
                          ),
                          m("option[value='BH']", 
                            "Bahrain"
                          ),
                          m("option[value='BD']", 
                            "Bangladesh"
                          ),
                          m("option[value='BB']", 
                            "Barbados"
                          ),
                          m("option[value='BY']", 
                            "Belarus"
                          ),
                          m("option[value='BE']", 
                            "Belgium"
                          ),
                          m("option[value='BZ']", 
                            "Belize"
                          ),
                          m("option[value='BJ']", 
                            "Benin"
                          ),
                          m("option[value='BM']", 
                            "Bermuda"
                          ),
                          m("option[value='BT']", 
                            "Bhutan"
                          ),
                          m("option[value='BO']", 
                            "Bolivia"
                          ),
                          m("option[value='BQ']", 
                            "Bonaire"
                          ),
                          m("option[value='BA']", 
                            "Bosnia and Herzegovina"
                          ),
                          m("option[value='BW']", 
                            "Botswana"
                          ),
                          m("option[value='BV']", 
                            "Bouvet Island"
                          ),
                          m("option[value='BR']", 
                            "Brazil"
                          ),
                          m("option[value='IO']", 
                            "British Indian Ocean Territory"
                          ),
                          m("option[value='BN']", 
                            "Brunei Darussalam"
                          ),
                          m("option[value='BG']", 
                            "Bulgaria"
                          ),
                          m("option[value='BF']", 
                            "Burkina Faso"
                          ),
                          m("option[value='BI']", 
                            "Burundi"
                          ),
                          m("option[value='CV']", 
                            "Cabo Verde"
                          ),
                          m("option[value='KH']", 
                            "Cambodia"
                          ),
                          m("option[value='CM']", 
                            "Cameroon"
                          ),
                          m("option[value='CA']", 
                            "Canada"
                          ),
                          m("option[value='KY']", 
                            "Cayman Islands"
                          ),
                          m("option[value='CF']", 
                            "Central African Republic"
                          ),
                          m("option[value='TD']", 
                            "Chad"
                          ),
                          m("option[value='CL']", 
                            "Chile"
                          ),
                          m("option[value='CN']", 
                            "China"
                          ),
                          m("option[value='CX']", 
                            "Christmas Island"
                          ),
                          m("option[value='CC']", 
                            "Cocos (Keeling) Islands"
                          ),
                          m("option[value='CO']", 
                            "Colombia"
                          ),
                          m("option[value='KM']", 
                            "Comoros"
                          ),
                          m("option[value='CG']", 
                            "Congo"
                          ),
                          m("option[value='CD']", 
                            "Congo, the Democratic Republic of the"
                          ),
                          m("option[value='CK']", 
                            "Cook Islands"
                          ),
                          m("option[value='CR']", 
                            "Costa Rica"
                          ),
                          m("option[value='CI']", 
                            "Côte d'Ivoire"
                          ),
                          m("option[value='HR']", 
                            "Croatia"
                          ),
                          m("option[value='CU']", 
                            "Cuba"
                          ),
                          m("option[value='CW']", 
                            "Curaçao"
                          ),
                          m("option[value='CY']", 
                            "Cyprus"
                          ),
                          m("option[value='CZ']", 
                            "Czech Republic"
                          ),
                          m("option[value='DK']", 
                            "Denmark"
                          ),
                          m("option[value='DJ']", 
                            "Djibouti"
                          ),
                          m("option[value='DM']", 
                            "Dominica"
                          ),
                          m("option[value='DO']", 
                            "Dominican Republic"
                          ),
                          m("option[value='EC']", 
                            "Ecuador"
                          ),
                          m("option[value='EG']", 
                            "Egypt"
                          ),
                          m("option[value='SV']", 
                            "El Salvador"
                          ),
                          m("option[value='GQ']", 
                            "Equatorial Guinea"
                          ),
                          m("option[value='ER']", 
                            "Eritrea"
                          ),
                          m("option[value='EE']", 
                            "Estonia"
                          ),
                          m("option[value='ET']", 
                            "Ethiopia"
                          ),
                          m("option[value='FK']", 
                            "Falkland Islands (Malvinas)"
                          ),
                          m("option[value='FO']", 
                            "Faroe Islands"
                          ),
                          m("option[value='FJ']", 
                            "Fiji"
                          ),
                          m("option[value='FI']", 
                            "Finland"
                          ),
                          m("option[value='FR']", 
                            "France"
                          ),
                          m("option[value='GF']", 
                            "French Guiana"
                          ),
                          m("option[value='PF']", 
                            "French Polynesia"
                          ),
                          m("option[value='TF']", 
                            "French Southern Territories"
                          ),
                          m("option[value='GA']", 
                            "Gabon"
                          ),
                          m("option[value='GM']", 
                            "Gambia"
                          ),
                          m("option[value='GE']", 
                            "Georgia"
                          ),
                          m("option[value='DE']", 
                            "Germany"
                          ),
                          m("option[value='GH']", 
                            "Ghana"
                          ),
                          m("option[value='GI']", 
                            "Gibraltar"
                          ),
                          m("option[value='GR']", 
                            "Greece"
                          ),
                          m("option[value='GL']", 
                            "Greenland"
                          ),
                          m("option[value='GD']", 
                            "Grenada"
                          ),
                          m("option[value='GP']", 
                            "Guadeloupe"
                          ),
                          m("option[value='GU']", 
                            "Guam"
                          ),
                          m("option[value='GT']", 
                            "Guatemala"
                          ),
                          m("option[value='GG']", 
                            "Guernsey"
                          ),
                          m("option[value='GW']", 
                            "Guinea-Bissau"
                          ),
                          m("option[value='GN']", 
                            "Guinea"
                          ),
                          m("option[value='GY']", 
                            "Guyana"
                          ),
                          m("option[value='HT']", 
                            "Haiti"
                          ),
                          m("option[value='HM']", 
                            "Heard Island and McDonald Islands"
                          ),
                          m("option[value='VA']", 
                            "Holy See"
                          ),
                          m("option[value='HN']", 
                            "Honduras"
                          ),
                          m("option[value='HK']", 
                            "Hong Kong"
                          ),
                          m("option[value='HU']", 
                            "Hungary"
                          ),
                          m("option[value='IS']", 
                            "Iceland"
                          ),
                          m("option[value='IN']", 
                            "India"
                          ),
                          m("option[value='ID']", 
                            "Indonesia"
                          ),
                          m("option[value='IR']", 
                            "Iran"
                          ),
                          m("option[value='IQ']", 
                            "Iraq"
                          ),
                          m("option[value='IE']", 
                            "Ireland"
                          ),
                          m("option[value='IM']", 
                            "Isle of Man"
                          ),
                          m("option[value='IL']", 
                            "Israel"
                          ),
                          m("option[value='IT']", 
                            "Italy"
                          ),
                          m("option[value='JM']", 
                            "Jamaica"
                          ),
                          m("option[value='JP']", 
                            "Japan"
                          ),
                          m("option[value='JE']", 
                            "Jersey"
                          ),
                          m("option[value='JO']", 
                            "Jordan"
                          ),
                          m("option[value='KZ']", 
                            "Kazakhstan"
                          ),
                          m("option[value='KE']", 
                            "Kenya"
                          ),
                          m("option[value='KI']", 
                            "Kiribati"
                          ),
                          m("option[value='KP']", 
                            "Korea, Democratic People's Republic of"
                          ),
                          m("option[value='KR']", 
                            "Korea, Republic of"
                          ),
                          m("option[value='KW']", 
                            "Kuwait"
                          ),
                          m("option[value='KG']", 
                            "Kyrgyzstan"
                          ),
                          m("option[value='LA']", 
                            "Lao People's Democratic Republic"
                          ),
                          m("option[value='LV']", 
                            "Latvia"
                          ),
                          m("option[value='LB']", 
                            "Lebanon"
                          ),
                          m("option[value='LS']", 
                            "Lesotho"
                          ),
                          m("option[value='LR']", 
                            "Liberia"
                          ),
                          m("option[value='LY']", 
                            "Libya"
                          ),
                          m("option[value='LI']", 
                            "Liechtenstein"
                          ),
                          m("option[value='LT']", 
                            "Lithuania"
                          ),
                          m("option[value='LU']", 
                            "Luxembourg"
                          ),
                          m("option[value='MO']", 
                            "Macao"
                          ),
                          m("option[value='MK']", 
                            "Macedonia"
                          ),
                          m("option[value='MG']", 
                            "Madagascar"
                          ),
                          m("option[value='MW']", 
                            "Malawi"
                          ),
                          m("option[value='MY']", 
                            "Malaysia"
                          ),
                          m("option[value='MV']", 
                            "Maldives"
                          ),
                          m("option[value='ML']", 
                            "Mali"
                          ),
                          m("option[value='MT']", 
                            "Malta"
                          ),
                          m("option[value='MH']", 
                            "Marshall Islands"
                          ),
                          m("option[value='MQ']", 
                            "Martinique"
                          ),
                          m("option[value='MR']", 
                            "Mauritania"
                          ),
                          m("option[value='MU']", 
                            "Mauritius"
                          ),
                          m("option[value='YT']", 
                            "Mayotte"
                          ),
                          m("option[value='MX']", 
                            "Mexico"
                          ),
                          m("option[value='FM']", 
                            "Micronesia"
                          ),
                          m("option[value='MD']", 
                            "Moldova"
                          ),
                          m("option[value='MC']", 
                            "Monaco"
                          ),
                          m("option[value='MN']", 
                            "Mongolia"
                          ),
                          m("option[value='ME']", 
                            "Montenegro"
                          ),
                          m("option[value='MS']", 
                            "Montserrat"
                          ),
                          m("option[value='MA']", 
                            "Morocco"
                          ),
                          m("option[value='MZ']", 
                            "Mozambique"
                          ),
                          m("option[value='MM']", 
                            "Myanmar"
                          ),
                          m("option[value='NA']", 
                            "Namibia"
                          ),
                          m("option[value='NR']", 
                            "Nauru"
                          ),
                          m("option[value='NP']", 
                            "Nepal"
                          ),
                          m("option[value='NL']", 
                            "Netherlands"
                          ),
                          m("option[value='NC']", 
                            "New Caledonia"
                          ),
                          m("option[value='NZ']", 
                            "New Zealand"
                          ),
                          m("option[value='NI']", 
                            "Nicaragua"
                          ),
                          m("option[value='NE']", 
                            "Niger"
                          ),
                          m("option[value='NG']", 
                            "Nigeria"
                          ),
                          m("option[value='NU']", 
                            "Niue"
                          ),
                          m("option[value='NF']", 
                            "Norfolk Island"
                          ),
                          m("option[value='MP']", 
                            "Northern Mariana Islands"
                          ),
                          m("option[value='NO']", 
                            "Norway"
                          ),
                          m("option[value='OM']", 
                            "Oman"
                          ),
                          m("option[value='PK']", 
                            "Pakistan"
                          ),
                          m("option[value='PW']", 
                            "Palau"
                          ),
                          m("option[value='PS']", 
                            "Palestine, State of"
                          ),
                          m("option[value='PA']", 
                            "Panama"
                          ),
                          m("option[value='PG']", 
                            "Papua New Guinea"
                          ),
                          m("option[value='PY']", 
                            "Paraguay"
                          ),
                          m("option[value='PE']", 
                            "Peru"
                          ),
                          m("option[value='PH']", 
                            "Philippines"
                          ),
                          m("option[value='PN']", 
                            "Pitcairn"
                          ),
                          m("option[value='PL']", 
                            "Poland"
                          ),
                          m("option[value='PT']", 
                            "Portugal"
                          ),
                          m("option[value='PR']", 
                            "Puerto Rico"
                          ),
                          m("option[value='QA']", 
                            "Qatar"
                          ),
                          m("option[value='RE']", 
                            "Réunion"
                          ),
                          m("option[value='RO']", 
                            "Romania"
                          ),
                          m("option[value='RU']", 
                            "Russian Federation"
                          ),
                          m("option[value='RW']", 
                            "Rwanda"
                          ),
                          m("option[value='BL']", 
                            "Saint Barthélemy"
                          ),
                          m("option[value='SH']", 
                            "Saint Helena, Ascension and Tristan da Cunha"
                          ),
                          m("option[value='KN']", 
                            "Saint Kitts and Nevis"
                          ),
                          m("option[value='LC']", 
                            "Saint Lucia"
                          ),
                          m("option[value='MF']", 
                            "Saint Martin (French part)"
                          ),
                          m("option[value='PM']", 
                            "Saint Pierre and Miquelon"
                          ),
                          m("option[value='VC']", 
                            "Saint Vincent and the Grenadines"
                          ),
                          m("option[value='WS']", 
                            "Samoa"
                          ),
                          m("option[value='SM']", 
                            "San Marino"
                          ),
                          m("option[value='ST']", 
                            "Sao Tome and Principe"
                          ),
                          m("option[value='SA']", 
                            "Saudi Arabia"
                          ),
                          m("option[value='SN']", 
                            "Senegal"
                          ),
                          m("option[value='RS']", 
                            "Serbia"
                          ),
                          m("option[value='SC']", 
                            "Seychelles"
                          ),
                          m("option[value='SL']", 
                            "Sierra Leone"
                          ),
                          m("option[value='SG']", 
                            "Singapore"
                          ),
                          m("option[value='SX']", 
                            "Sint Maarten (Dutch part)"
                          ),
                          m("option[value='SK']", 
                            "Slovakia"
                          ),
                          m("option[value='SI']", 
                            "Slovenia"
                          ),
                          m("option[value='SB']", 
                            "Solomon Islands"
                          ),
                          m("option[value='SO']", 
                            "Somalia"
                          ),
                          m("option[value='ZA']", 
                            "South Africa"
                          ),
                          m("option[value='GS']", 
                            "South Georgia and the South Sandwich Islands"
                          ),
                          m("option[value='SS']", 
                            "South Sudan"
                          ),
                          m("option[value='ES']", 
                            "Spain"
                          ),
                          m("option[value='LK']", 
                            "Sri Lanka"
                          ),
                          m("option[value='SD']", 
                            "Sudan"
                          ),
                          m("option[value='SR']", 
                            "Suriname"
                          ),
                          m("option[value='SJ']", 
                            "Svalbard and Jan Mayen"
                          ),
                          m("option[value='SZ']", 
                            "Swaziland"
                          ),
                          m("option[value='SE']", 
                            "Sweden"
                          ),
                          m("option[value='CH']", 
                            "Switzerland"
                          ),
                          m("option[value='SY']", 
                            "Syrian Arab Republic"
                          ),
                          m("option[value='TW']", 
                            "Taiwan"
                          ),
                          m("option[value='TJ']", 
                            "Tajikistan"
                          ),
                          m("option[value='TZ']", 
                            "Tanzania"
                          ),
                          m("option[value='TH']", 
                            "Thailand"
                          ),
                          m("option[value='TL']", 
                            "Timor-Leste"
                          ),
                          m("option[value='TG']", 
                            "Togo"
                          ),
                          m("option[value='TK']", 
                            "Tokelau"
                          ),
                          m("option[value='TO']", 
                            "Tonga"
                          ),
                          m("option[value='TT']", 
                            "Trinidad and Tobago"
                          ),
                          m("option[value='TN']", 
                            "Tunisia"
                          ),
                          m("option[value='TR']", 
                            "Turkey"
                          ),
                          m("option[value='TM']", 
                            "Turkmenistan"
                          ),
                          m("option[value='TC']", 
                            "Turks and Caicos Islands"
                          ),
                          m("option[value='TV']", 
                            "Tuvalu"
                          ),
                          m("option[value='UG']", 
                            "Uganda"
                          ),
                          m("option[value='UA']", 
                            "Ukraine"
                          ),
                          m("option[value='AE']", 
                            "United Arab Emirates"
                          ),
                          m("option[value='GB']", 
                            "United Kingdom"
                          ),
                          m("option[value='UM']", 
                            "United States Minor Outlying Islands"
                          ),
                          m("option[value='US']", 
                            "United States"
                          ),
                          m("option[value='UY']", 
                            "Uruguay"
                          ),
                          m("option[value='UZ']", 
                            "Uzbekistan"
                          ),
                          m("option[value='VU']", 
                            "Vanuatu"
                          ),
                          m("option[value='VE']", 
                            "Venezuela"
                          ),
                          m("option[value='VN']", 
                            "Viet Nam"
                          ),
                          m("option[value='VG']", 
                            "Virgin Islands, British"
                          ),
                          m("option[value='VI']", 
                            "Virgin Islands, U.S."
                          ),
                          m("option[value='WF']", 
                            "Wallis and Futuna"
                          ),
                          m("option[value='EH']", 
                            "Western Sahara"
                          ),
                          m("option[value='YE']", 
                            "Yemen"
                          ),
                          m("option[value='ZM']", 
                            "Zambia"
                          ),
                          m("option[value='ZW']", 
                            "Zimbabwe"
                          )
                        ]
                      )
                    )
                  ]
                ),
                m(".row", 
                  m(".large-10.large-offset-2.columns", 
                    m("button.button.radius", 
                      "Update Profile"
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
const Data = {
    oncreate: function () {
        $("body").attr("class", "layout-default page-account action-profile")
        jq._positionEl();
    },
    view: function () {
        return m(Layout, { class: 'account' },
            m(Account, { class: 'profile' },
               m(Body)
            )
        )
    }
}

export default Data