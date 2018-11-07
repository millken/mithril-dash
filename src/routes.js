import PageLayout from './view/components/page-layout';

// Individual pages
import IndexPage from './view/pages/landing-page';
import FormPage from './view/pages/form-page';
import PageTable from './view/pages/table';
import Splash from './view/components/splash-loader/index';
import MaintenancePage from './view/components/maintenance-layout/index';

const root = document.body;

const Routes = {
    '/splash': {
        render: function() {
            return m(PageLayout, m(Splash));
        },
    },
    '/form': {
        render: function() {
            return m(PageLayout, m(FormPage));
        },
    },
    '/table': {
        render: function() {
            return m(PageLayout, m(PageTable));
        },
    },
    '/index': {
        onmatch() {
            // Show Loader until the promise has been resolved or rejected.
            m.render(root, m(PageLayout, m(Splash)));

            return new Promise((resolve/*, reject*/) => {
                //Fetch all necessary data here
                setTimeout(function() {
                    resolve();
                }, 2000);
            }).catch((/* e */) => {
                // In case of server error we can show the maintenance page.
                return MaintenancePage;
            });
        },
        render(vnode) {
            if (typeof vnode.tag === 'function') {
                //If onmatch returns a component or a promise that resolves to a component, comes here.
                return vnode;
            }
            return m(PageLayout, m(IndexPage));
        },
    },
};

const DefaultRoute = '/index';

export { Routes, DefaultRoute };