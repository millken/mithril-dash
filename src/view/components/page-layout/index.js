import SidebarComponent from '../sidebar';

import './styles.scss';

import PageContainer from '../page-container';

/**
 * A component that wraps another component with some common
 * page layout markup and styles.
 */
export default function() {
    return {
        view: (vnode) => m('.page-layout', <SidebarComponent />, m(PageContainer,  vnode.children)),
    };
}