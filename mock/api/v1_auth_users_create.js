function(params) {
    var res = {}
    if (params.email === "demo@demo.com") {
        res = {
            errno: 1001,
            errmsg: 'Failed to create account. One aleady exists to "'+ params.email+'"'
        }
    }else if(params.password.length < 8) {
        res = {
            errno: 1002,
            errmsg: 'Password must be at least 8 characters.'
        }
    }else {
        res = {
            errno: 0,
            data :{
                email: params.email,
                uid: 223
            }
        }
    }
    return res
}