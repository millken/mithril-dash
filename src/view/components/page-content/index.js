import Breadcrumb from '~/components/breadcrumb';
import ContentAlert from '~/components/content-alert';


export default function() {
    return {        
        view(vnode) {
            Breadcrumb.set('aaaaa', '/form');
            Breadcrumb.add('bssd');
            return (
                <main class='main-content bgc-grey-100'>
                    <div id='mainContent'>
                        <Breadcrumb />
                        <ContentAlert />
                        {vnode.children}
        
                    </div>
                </main>
            );
        },
    };
}