import './styles.scss';

let breadcrumbData = [];
const Component = {
    add:(name, href='') => {
        breadcrumbData.push({
            name: name,
            href: href
        })
    },
    set:(name, href='') => {
        breadcrumbData = [{
            name: name,
            href: href
        }]
    },
    view: () => {
        return (
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                {
                    breadcrumbData.map((breadcrumb) =>
          m('li.breadcrumb-item', m('a',{href: breadcrumb.href}, breadcrumb.name))
          )
          }
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Library</li>
                </ol>
            </nav>
        );
    }
};

export default Component;