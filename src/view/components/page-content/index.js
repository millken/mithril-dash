import Breadcrumb from "../breadcrumb"

export default function() {
    return {        
        view(vnode) {
            return (
                <main class='main-content bgc-grey-100'>
                    <div id='mainContent'>
                            <Breadcrumb />
                            {vnode.children}
        
                    </div>
                </main>
            );
        },
    };
}