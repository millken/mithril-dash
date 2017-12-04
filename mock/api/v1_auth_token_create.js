function(params) {
    var res = {}
    if (params.email !== "demo@demo.com") {
        res = {
            errno: 1001,
            errmsg: 'You provided invalid login credentials.'
        }
    } else if (params.password.length < 8) {
        res = {
            errno: 1002,
            errmsg: 'Password must be at least 8 characters.'
        }
    } else {
        res = {
            errno: 0,
            data: {
                email: params.email,
                uid: 223,
                token: '3d990d2276917dfac04467df11fff26d'
            }
        }
    }
    return res
}