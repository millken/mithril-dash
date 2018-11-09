import './styles.scss';
import logopng from '~/assets/static/images/logo.png';

let data = [
    {
        href: '/index',
        icon: 'ti-home',
        title: '控制台',
    },
    {
        href: '/form',
        icon: 'ti-pencil',
        title: '表单',
    },
    {
        href: '/table',
        icon: 'ti-pencil',
        title: '表格',
    },
];

export default function() {
    
    return {        
        view() {
            return (
                <div class="sidebar">
                    <div class="sidebar-inner">
                  
                        <div class="sidebar-logo">
                            <div class="peers ai-c fxw-nw">
                                <div class="peer peer-greed">
                                    <a class="sidebar-link td-n" href="index.html">
                                        <div class="peers ai-c fxw-nw">
                                            <div class="peer">
                                                <div class="logo">
                                                    {m('img', { src: logopng})}
                                                </div>
                                            </div>
                                            <div class="peer peer-greed">
                                                <h5 class="lh-1 mB-0 logo-text">Adminator</h5>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="peer">
                                    <div class="mobile-toggle sidebar-toggle">
                                        <a href="" class="td-n">
                                            <i class="ti-arrow-circle-left"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <ul class="sidebar-menu scrollable pos-r">
                            {data.map((obj, key) => 

                                m('li', {className: (m.route.get() === obj.href ? 'active nav-item' : 'nav-item') + (!key?' mT-30':'')}, 
                                    m('a[href='+obj.href+'].sidebar-link', { oncreate: m.route.link  },
                                        m('span.icon-holder', m('i', {className: 'c-blue-500 '+ obj.icon})),
                                        m('span.title', obj.title)
                                    )
                                )
                  
                            )}
                        </ul>
                    </div>
                </div>
            );
        },
    };
}