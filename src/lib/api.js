const prefix = '/api'; // api地址前缀
export default(config => {
    return Object.keys(config).reduce((copy, name) => {
        copy[name] = prefix + config[name];
        return copy;
    }, {});
})({
    // example api
    'accountSignup': '/account/signup', 
});

/*
// api对象
{
  getExampleData: '/api/example/data'
}
*/