module.exports = {
    apiPrefix: typeof window == 'undefined' ? 'http://127.0.0.1:8080/api/v1' : '/api/v1',
    menuList : [
        { 'id': 'servers', 'name': 'Servers' },
        { 'id': 'apps', 'name': 'Apps' },
        { 'id': 'account', 'name': 'Account' },
        { 'id': 'support', 'name': 'Support' },
        { 'id': 'logout', 'name': 'Log out' }
    ],
    accountSubmenuList: [
        {'id': 'billing', 'name': 'Billing'},
        {'id': 'email', 'name': 'Email'},
        {'id': 'password', 'name': 'Password'},
        {'id': 'mfa', 'name': '2-Step Auth'},
        {'id': 'profile', 'name': 'Profile'},
        {'id': 'referrals', 'name': 'Referrals'},
        {'id': 'api', 'name': 'API'}
    ]
};