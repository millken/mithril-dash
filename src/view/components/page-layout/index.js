import SidebarComponent from '../sidebar';

import './styles.scss';

import PageContainer from '../page-container';

const Component = {
    sidebarIsOpen : true,
    view: (vnode) => 
        m('div', {className: Component.sidebarIsOpen? 'page-layout': 'page-layout is-collapsed'}, <SidebarComponent />, m(PageContainer,  vnode.children)),

};
export default Component;