import m from 'mithril'
import stream from 'mithril/stream/stream'


const Box1 = {
    visible : stream(false),
    show() { Box1.visible(true) },
    hide() { Box1.visible(false) },
    view(vnode) {
        return !Box1.visible() ? null : m('div.row', [
            m('.small-12.columns',
                m(".alert-box.warning.radius",
                    vnode.attrs.title,
                    m("a[href=javascript:;].close", {onclick:function(){Box1.hide()}}, "×")
                )
            )
        ])
    }
}

module.exports = Box1