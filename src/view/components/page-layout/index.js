import SidebarComponent from '../sidebar';
import stream from 'mithril/stream/stream';

import './styles.scss';

import PageContainer from '../page-container';

const Component = {
    sidebarIsOpen : stream(false),
    view: (vnode) => 
        m('div', {className: Component.sidebarIsOpen? 'page-layout': 'page-layout is-collapsed'}, <SidebarComponent />, m(PageContainer,  vnode.children)),

};
export default Component;