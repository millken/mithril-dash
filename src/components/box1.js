const m = require('mithril')

const Tip1 = {
    active: false,
    show() { Modal.active = true },
    hide() { Modal.active = false },
    view(vnode) {
        return m('div', { class: Modal.active ? 'modal is-active' : 'modal' }, [
            m('.modal-background'),
            m('.modal-card', [
                m('header.modal-card-head', [
                    m('p.modal-card-title', vnode.attrs.title),
                    m('button.delete', { onclick: Modal.hide })
                ]),
                m('section.modal-card-body', vnode.children)
            ])
        ])
    }
}

module.exports = Tip1