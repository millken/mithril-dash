function(params) {
    if (params.email == "demo@demo.com") {
        return {
            errno: 1001,
            errmsg: 'email exist!'
        }
    } else {
        return {
            errno: 0
        }
    }
}