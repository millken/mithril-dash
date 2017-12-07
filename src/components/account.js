import m from 'mithril'
const config = require('../config.js')

const Account = {
    view(vnode) {
        return [m('header#page-header.row',
            m('.large-12.columns',
                m('h2.page-title', 'Account')
            ),
            m('.large-12.columns',
                m('ul.inline-list.left.submenu', config.accountSubmenuList.map((item) =>
                    m('li', { className: vnode.attrs.class == item.id ? 'active' : '' }, m("a[href=/account/" + item.id + "].navigate", { oncreate: m.route.link }, item.name))
                ))
            )
        ),
            m('section#page-content', vnode.children)]
    }
}

module.exports = Account