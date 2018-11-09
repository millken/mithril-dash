import './styles.scss';

let breadcrumbData = [];
const Component = {
    add:(name, href='') => {
        breadcrumbData.push({
            name: name,
            href: href,
        });
    },
    set:(name, href='') => {
        breadcrumbData = [{
            name: name,
            href: href,
        }];
    },
    view: () => {
        let last = breadcrumbData.pop();
        return (
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    {
                        breadcrumbData.map((breadcrumb) =>
                            m('li.breadcrumb-item', m('a',{href: breadcrumb.href,  oncreate: m.route.link}, breadcrumb.name))
                        )
                    }
                    <li class="breadcrumb-item active">{last.name}</li>
                </ol>
            </nav>
        );
    },
};

export default Component;