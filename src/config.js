module.exports = {
    apiPrefix: typeof window == 'undefined' ? 'http://127.0.0.1:8080/api/v1' : '/api/v1',
    menuList : [
        { 'id': 'servers', 'name': 'Servers' },
        { 'id': 'app', 'name': 'App' },
        { 'id': 'account', 'name': 'Account' },
        { 'id': 'support', 'name': 'Support' },
        { 'id': 'logout', 'name': 'Log out' }
    ]
};