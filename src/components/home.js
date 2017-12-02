import m from 'mithril'


const Home = {
    view: function() {
        return m('div', m('a', { href: "https://github.com/erdivartanovich/aboutme" },
            'here'
        ))
    }
}

export default Home