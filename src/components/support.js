import m from 'mithril'
import $ from "jquery"

const Layout = require('./layout.js')
const jq = require("../utils/jq.js")

var Body = {
  oncreate: function () {
    $("dl[data-tab] > dd >a").click(function(){
      $("dl[data-tab]> dd").removeClass("active");
      $(this).parent().addClass("active");
      $(".tabs-content > .content").removeClass("active");
      $($(this).attr("href")).addClass("active");
      return false;
    })
  },
    view: function () {
        return [
          m("header.row[id='page-header']", 
            m(".large-12.columns", 
              m("h2.page-title", 
                "Support"
              )
            )
          ), 
          m("section[id='page-content']", 
            m(".row",
              [
                m(".large-12.columns.option-group",
                  [
                    m("h3", 
                      "Documentation"
                    ),
                    m("hr"),
                    m("p", 
                      "The following guides are a great place to start:"
                    ),
                    m(".row",
                      [
                        m(".large-6.columns", 
                          m("p",
                            [
                              m("a[href='https://serverpilot.io/community/articles/getting-started-with-serverpilot.html'][target='_blank']", 
                                "Getting Started with ServerPilot"
                              ),
                              m("br"),
                              m("a[href='https://serverpilot.io/community/articles/getting-started-with-apps.html'][target='_blank']", 
                                "Getting Started with Apps"
                              ),
                              m("br"),
                              m("a[href='https://serverpilot.io/community/articles/getting-started-with-domains-and-dns-records.html'][target='_blank']", 
                                "Getting Started with Domains and DNS"
                              )
                            ]
                          )
                        ),
                        m(".large-6.columns", 
                          m("p",
                            [
                              m("a[href='https://serverpilot.io/community/articles/getting-started-with-ssh-and-sftp.html'][target='_blank']", 
                                "Getting Started with SSH and SFTP"
                              ),
                              m("br"),
                              m("a[href='https://serverpilot.io/community/articles/getting-started-with-ssl.html'][target='_blank']", 
                                "Getting Started with SSL"
                              ),
                              m("br"),
                              m("a[href='https://serverpilot.io/community/articles/getting-started-with-system-users.html'][target='_blank']", 
                                "Getting Started with System Users"
                              )
                            ]
                          )
                        )
                      ]
                    ),
                    m("p", {style: {"margin-bottom": "0"}}, 
                      m("a.button.radius[href='https://serverpilot.io/community/'][target='new']", {style: {"margin-bottom": "0"}}, 
                        "See All Documentation"
                      )
                    )
                  ]
                ),
                m(".large-12.columns.option-group.faq",
                  [
                    m("h3", 
                      "Frequently Asked Questions"
                    ),
                    m("hr"),
                    m(".row",
                      [
                        m("style", 
                          ".faq .tabs a {\
                color: #008CDD !important;\
              }\
              .faq .tabs dd > a,\
              .faq .tabs .tab-title > a {\
                padding: 1rem;\
              }"
                        ),
                        m(".large-3.columns", 
                          m("dl.tabs.vertical[data-tab='']",
                            [
                              m("dd.active", 
                                m("a[href='#faq-apps']", 
                                  "Apps"
                                )
                              ),
                              m("dd", 
                                m("a[href='#faq-domains-and-dns']",
                                  [
                                    "Domains ",
                                    m.trust("&amp;"),
                                    " DNS"
                                  ]
                                )
                              ),
                              m("dd", 
                                m("a[href='#faq-ssl']", 
                                  "SSL"
                                )
                              ),
                              m("dd", 
                                m("a[href='#faq-wordpress']", 
                                  "WordPress"
                                )
                              ),
                              m("dd", 
                                m("a[href='#faq-php']", 
                                  "PHP"
                                )
                              ),
                              m("dd", 
                                m("a[href='#faq-mysql']", 
                                  "MySQL"
                                )
                              ),
                              m("dd", 
                                m("a[href='#faq-servers']", 
                                  "Servers"
                                )
                              ),
                              m("dd", 
                                m("a[href='#faq-troubleshooting']", 
                                  "Troubleshooting"
                                )
                              ),
                              m("dd", 
                                m("a[href='#faq-billing']",
                                  [
                                    "Pricing ",
                                    m.trust("&amp;"),
                                    " Billing"
                                  ]
                                )
                              )
                            ]
                          )
                        ),
                        m(".large-9.columns", 
                          m(".tabs-content",
                            [
                              m(".content[id='faq-billing']",
                                [
                                  m("h4",
                                    [
                                      "Pricing ",
                                      m.trust("&amp;"),
                                      " Billing"
                                    ]
                                  ),
                                  m("dl",
                                    [
                                      m("dt", 
                                        "How many servers can I have on the Free plan?"
                                      ),
                                      m("dd", 
                                        "As many as you want."
                                      ),
                                      m("dt", 
                                        "If I have multiple servers, how much do the paid plans cost?"
                                      ),
                                      m("dd", 
                                        "Our pricing is per server. So, two servers on the Coach plan costs $20/month."
                                      ),
                                      m("dt", 
                                        "Can I change my plan?"
                                      ),
                                      m("dd", 
                                        "Absolutely. You may upgrade or downgrade your plan at any time."
                                      ),
                                      m("dt", 
                                        "Can I have servers on separate plans?"
                                      ),
                                      m("dd", 
                                        "Yes. Just create a separate account for each plan."
                                      ),
                                      m("dt", 
                                        "Can I transfer a server to a different account?"
                                      ),
                                      m("dd",
                                        [
                                          "You can. See our article on",
                                          m("a[href='https://serverpilot.io/community/articles/how-to-move-a-server-between-accounts.html'][target='_blank']", 
                                            "moving servers between accounts"
                                          ),
                                          "."
                                        ]
                                      ),
                                      m("dt", 
                                        "What if I connect or delete a server partway through the month?"
                                      ),
                                      m("dd", 
                                        "That server will only be billed for part of the month."
                                      ),
                                      m("dt", 
                                        "What if I change plans partway through the month?"
                                      ),
                                      m("dd", 
                                        "Your servers will only be billed for the time they are on each plan."
                                      ),
                                      m("dt", 
                                        "When will my card be charged?"
                                      ),
                                      m("dd", 
                                        "Your card will be charged after each month has ended."
                                      ),
                                      m("dt", 
                                        "Where do I find my invoices?"
                                      ),
                                      m("dd",
                                        [
                                          "See how to",
                                          m("a[href='https://serverpilot.io/community/articles/how-to-view-your-invoices.html'][target='_blank']", 
                                            "view and download PDF invoices"
                                          ),
                                          "."
                                        ]
                                      ),
                                      m("dt", 
                                        "Can I pay with PayPal?"
                                      ),
                                      m("dd", 
                                        "We don't support PayPal. We do support prepaid debit cards."
                                      ),
                                      m("dt", 
                                        "What if I decide to cancel my account?"
                                      ),
                                      m("dd", 
                                        "Simply downgrade to the Free plan or email us and we'll take care of it for you."
                                      )
                                    ]
                                  )
                                ]
                              ),
                              m(".content.active[id='faq-apps']",
                                [
                                  m("h4", 
                                    "Apps"
                                  ),
                                  m("dl",
                                    [
                                      m("dt", 
                                        "What's an app?"
                                      ),
                                      m("dd", 
                                        "An app is a PHP web application. That is, a website."
                                      ),
                                      m("dt", 
                                        "Can I have multiple websites on a single server?"
                                      ),
                                      m("dd", 
                                        "Absolutely. Just create a separate app for each website."
                                      ),
                                      m("dt", 
                                        "How do I install a particular application?"
                                      ),
                                      m("dd",
                                        [
                                          "Check our",
                                          m("a[href='https://serverpilot.io/community/']", 
                                            "documentation"
                                          ),
                                          "for instructions on how to install many popular apps."
                                        ]
                                      ),
                                      m("dt", 
                                        "How do I upload files to my app?"
                                      ),
                                      m("dd",
                                        [
                                          "You can use an SSH or SFTP program to upload files.\
                      See how to",
                                          m("a[href='https://serverpilot.io/community/articles/how-to-upload-files-over-sftp-with-cyberduck.html'][target='_blank']", 
                                            "upload files using Cyberduck"
                                          ),
                                          "."
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              ),
                              m(".content[id='faq-domains-and-dns']",
                                [
                                  m("h4",
                                    [
                                      "Domains ",
                                      m.trust("&amp;"),
                                      " DNS"
                                    ]
                                  ),
                                  m("dl",
                                    [
                                      m("dt", 
                                        "How do I configure DNS?"
                                      ),
                                      m("dd",
                                        [
                                          "See our articles on configuring DNS at",
                                          m("a[href='https://serverpilot.io/community/articles/how-to-configure-dns-on-digitalocean.html'][target='_blank']", 
                                            "DigitalOcean"
                                          ),
                                          ",",
                                          m("a[href='https://serverpilot.io/community/articles/how-to-configure-dns-on-linode.html'][target='_blank']", 
                                            "Linode"
                                          ),
                                          ",\
                      and",
                                          m("a[href='https://serverpilot.io/community/articles/how-to-configure-dns-on-vultr.html'][target='_blank']", 
                                            "Vultr"
                                          ),
                                          "."
                                        ]
                                      ),
                                      m("dt", 
                                        "Can I have multiple domains on a single app?"
                                      ),
                                      m("dd", 
                                        "Definitely. Just add each domain to your app through ServerPilot."
                                      ),
                                      m("dt", 
                                        "How do I create a subdomain?"
                                      ),
                                      m("dd",
                                        [
                                          "See our article on",
                                          m("a[href='https://serverpilot.io/community/articles/how-to-create-a-subdomain.html'][target='_blank']", 
                                            "creating subdomains"
                                          ),
                                          "."
                                        ]
                                      ),
                                      m("dt", 
                                        "Does ServerPilot support wildcard subdomains?"
                                      ),
                                      m("dd",
                                        [
                                          "We do. See our article on",
                                          m("a[href='https://serverpilot.io/community/articles/how-to-use-wildcard-subdomains.html'][target='_blank']", 
                                            "using wildcard subdomains"
                                          ),
                                          "."
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              ),
                              m(".content[id='faq-servers']",
                                [
                                  m("h4", 
                                    "Servers"
                                  ),
                                  m("dl",
                                    [
                                      m("dt", 
                                        "Does ServerPilot provide servers?"
                                      ),
                                      m("dd", 
                                        "No, we don't. ServerPilot automates the configuration and management of servers."
                                      ),
                                      m("dt", 
                                        "Which server providers can I use?"
                                      ),
                                      m("dd", 
                                        "You can use any server provider that offers Ubuntu."
                                      ),
                                      m("dt", 
                                        "What do I need to install on my server?"
                                      ),
                                      m("dd", 
                                        "Nothing at all. ServerPilot installs and configures everything your server needs."
                                      ),
                                      m("dt", 
                                        "Will resizing my server cause problems with ServerPilot?"
                                      ),
                                      m("dd",
                                        [
                                          "Resizing your server will not create problems. See",
                                          m("a[href='https://serverpilot.io/community/articles/cloning-and-resizing-servers.html'][target='_blank']", 
                                            "here"
                                          ),
                                          "."
                                        ]
                                      ),
                                      m("dt", 
                                        "How do I transfer a server to a different account?"
                                      ),
                                      m("dd",
                                        [
                                          "See our article on",
                                          m("a[href='https://serverpilot.io/community/articles/how-to-move-a-server-between-accounts.html'][target='_blank']", 
                                            "moving servers between accounts"
                                          ),
                                          "."
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              ),
                              m(".content[id='faq-ssl']",
                                [
                                  m("h4", 
                                    "SSL"
                                  ),
                                  m("dl",
                                    [
                                      m("dt", 
                                        "How do I enable SSL"
                                      ),
                                      m("dd",
                                        [
                                          "See our article on",
                                          m("a[href='https://serverpilot.io/community/articles/how-to-install-an-ssl-certificate-on-your-site.html'][target='_blank']", 
                                            "enabling SSL"
                                          ),
                                          "."
                                        ]
                                      ),
                                      m("dt", 
                                        "Can ServerPilot issue certificates from Let's Encrypt?"
                                      ),
                                      m("dd",
                                        [
                                          "We can. Learn more about our",
                                          m("a[href='https://serverpilot.io/community/articles/how-to-use-autossl.html'][target='_blank']", 
                                            "AutoSSL feature"
                                          ),
                                          "."
                                        ]
                                      ),
                                      m("dt", 
                                        "How do I create a wildcard SSL certificate?"
                                      ),
                                      m("dd",
                                        [
                                          "If you need a certificate for \"*.example.com\", see our article on",
                                          m("a[href='https://serverpilot.io/community/articles/wildcard-ssl-certificates.html'][target='_blank']", 
                                            "wildcard certificates"
                                          ),
                                          "."
                                        ]
                                      ),
                                      m("dt", 
                                        "How do I enable HTTP/2?"
                                      ),
                                      m("dd",
                                        [
                                          "ServerPilot",
                                          m("a[href='https://serverpilot.io/community/articles/http2-is-enabled-for-your-ssl-websites.html'][target='_blank']", 
                                            "automatically enables HTTP/2 when you enable SSL"
                                          ),
                                          "."
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              ),
                              m(".content[id='faq-wordpress']",
                                [
                                  m("h4", 
                                    "WordPress"
                                  ),
                                  m("dl",
                                    [
                                      m("dt", 
                                        "How do I install WordPress?"
                                      ),
                                      m("dd",
                                        [
                                          "The easiest way is to use our",
                                          m("a[href='https://serverpilot.io/community/articles/how-to-install-wordpress-on-digitalocean.html'][target='_blank']", 
                                            "one-click WordPress installer"
                                          ),
                                          "."
                                        ]
                                      ),
                                      m("dt", 
                                        "How do I configure caching?"
                                      ),
                                      m("dd",
                                        [
                                          "If you need caching, we recommend",
                                          m("a[href='https://serverpilot.io/community/articles/how-to-install-wp-rocket.html'][target='_blank']", 
                                            "WP Rocket"
                                          ),
                                          "or",
                                          m("a[href='https://serverpilot.io/community/articles/how-to-install-wp-super-cache.html'][target='_blank']", 
                                            "WP Super Cache"
                                          ),
                                          "."
                                        ]
                                      ),
                                      m("dt", 
                                        "How do I automatically update WordPress?"
                                      ),
                                      m("dd", 
                                        "WordPress includes its own auto-update feature which is enabled by default."
                                      )
                                    ]
                                  )
                                ]
                              ),
                              m(".content[id='faq-php']",
                                [
                                  m("h4", 
                                    "PHP"
                                  ),
                                  m("dl",
                                    [
                                      m("dt", 
                                        "Which PHP version should I use?"
                                      ),
                                      m("dd", 
                                        "You should use most recent version of PHP your application supports."
                                      ),
                                      m("dt", 
                                        "Which PHP extensions are installed by default?"
                                      ),
                                      m("dd",
                                        [
                                          "See our list of",
                                          m("a[href='https://serverpilot.io/community/articles/available-php-extensions.html'][target='_blank']", 
                                            "available PHP extensions"
                                          ),
                                          "."
                                        ]
                                      ),
                                      m("dt", 
                                        "How do I install unofficial PHP extensions?"
                                      ),
                                      m("dd",
                                        [
                                          "See our guide to",
                                          m("a[href='https://serverpilot.io/community/articles/how-to-install-php-pecl-extensions.html'][target='_blank']", 
                                            "installing PECL extensions"
                                          ),
                                          "."
                                        ]
                                      ),
                                      m("dt", 
                                        "How do I install IonCube?"
                                      ),
                                      m("dd",
                                        [
                                          "See our guide to",
                                          m("a[href='https://serverpilot.io/community/articles/install-ioncube-loader.html'][target='_blank']", 
                                            "installing IonCube"
                                          ),
                                          "."
                                        ]
                                      ),
                                      m("dt", 
                                        "Is PHP's Opcache enabled?"
                                      ),
                                      m("dd", 
                                        "PHP's opcode cache is enabled by default with PHP 5.5, 5.6, 7.0, and 7.1."
                                      )
                                    ]
                                  )
                                ]
                              ),
                              m(".content[id='faq-mysql']",
                                [
                                  m("h4", 
                                    "MySQL"
                                  ),
                                  m("dl",
                                    [
                                      m("dt", 
                                        "How do I create a database?"
                                      ),
                                      m("dd",
                                        [
                                          "See our article on",
                                          m("a[href='https://serverpilot.io/community/articles/how-to-create-a-database.html'][target='_blank']", 
                                            "creating a database"
                                          ),
                                          "."
                                        ]
                                      ),
                                      m("dt", 
                                        "Can I have more than one database on a server?"
                                      ),
                                      m("dd", 
                                        "Yes, you can have as many databases as you'd like on a server."
                                      ),
                                      m("dt", 
                                        "How do I view and edit my database?"
                                      ),
                                      m("dd",
                                        [
                                          "We recommend",
                                          m("a[href='https://serverpilot.io/community/articles/how-to-manage-your-database-with-adminer.html'][target='_blank']", 
                                            "using Adminer to manage your databases"
                                          ),
                                          "."
                                        ]
                                      ),
                                      m("dt", 
                                        "How do I change a database user's password?"
                                      ),
                                      m("dd",
                                        [
                                          "See our guide to",
                                          m("a[href='https://serverpilot.io/community/articles/how-to-change-the-database-password.html'][target='_blank']", 
                                            "changing database passwords"
                                          ),
                                          "."
                                        ]
                                      ),
                                      m("dt", 
                                        "Can I connect to a database remotely?"
                                      ),
                                      m("dd",
                                        [
                                          "You can. See our guide to",
                                          m("a[href='https://serverpilot.io/community/articles/connect-to-mysql-remotely.html'][target='_blank']", 
                                            "remotely connecting to MySQL"
                                          ),
                                          "."
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              ),
                              m(".content[id='faq-troubleshooting']",
                                [
                                  m("h4", 
                                    "Troubleshooting"
                                  ),
                                  m("dl",
                                    [
                                      m("dt", 
                                        "Why does WordPress say \"error establishing a database connection\"?"
                                      ),
                                      m("dd",
                                        [
                                          "This probably means you need a server with more memory.",
                                          m("a[href='https://serverpilot.io/community/articles/fix-wordpress-error-establishing-a-database-connection.html'][target='_blank']", 
                                            "Learn more."
                                          )
                                        ]
                                      ),
                                      m("dt", 
                                        "Why does ServerPilot say my server is \"Not Connected\""
                                      ),
                                      m("dd",
                                        [
                                          "Your server may be offline at your provider.",
                                          m("a[href='https://serverpilot.io/community/articles/server-not-connected.html'][target='_blank']", 
                                            "Learn more."
                                          )
                                        ]
                                      ),
                                      m("dt", 
                                        "Why can't I SSH/SFTP into my Amazon, Google, or Azure server?"
                                      ),
                                      m("dd",
                                        [
                                          "These providers disable password login by default.\
                      See",
                                          m("a[href='https://serverpilot.io/community/articles/how-to-enable-ssh-password-authentication.html'][target='_blank']", 
                                            "how to enable it"
                                          ),
                                          "."
                                        ]
                                      ),
                                      m("dt", 
                                        "Why can't I access my website at Amazon, Google, or Azure?"
                                      ),
                                      m("dd", 
                                        "You may need to open ports 80 and 443 in these providers' network settings."
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]
                          )
                        )
                      ]
                    )
                  ]
                ),
                m(".large-12.columns.option-group",
                  [
                    m("h3[id='support-form-scroll-target']", 
                      "Still need help?"
                    ),
                    m("hr"),
                    m("button.button.radius[id='show-support-form']", {style: {"margin-bottom": "0"}}, 
                      "Open a Support Ticket"
                    ),
                    m("[id='support-form']", {style: {"display": "none"}},
                      [
                        m("p", 
                          "Enter details of your support request below.\
              Please include the server name, app name, domain, URL, and any other\
              information relevant to your support request."
                        ),
                        m("form[method='post']",
                          [
                            m("input.large-12[name='subject'][placeholder='Subject'][required=''][type='text']"),
                            m("textarea.large-12[name='body'][placeholder='Describe the problem in detail'][required=''][rows='6']"),
                            m("button.button.radius", 
                              "Create Ticket"
                            )
                          ]
                        )
                      ]
                    )
                  ]
                )
              ]
            )
          )
        ]
    }
}
const Data = {
    oncreate: function () {
        $("body").attr("class", "layout-default page-support")
        jq._positionEl();
    },
    view: function () {
        return m(Layout, { class: 'support' },
               m(Body)
        )
    }
}

export default Data