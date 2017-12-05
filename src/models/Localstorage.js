const prefix = 'mithril.' // not necessary
const storage = window.localStorage

const Localstorage = {
    set(key, value) {
        let _key = prefix + key
        let _value
        try {
            _value = JSON.stringify(value)
        } catch (e) {
            _value = value
        }
        storage.setItem(_key, _value)
    },
    get(key) {
        let _key = prefix + key
        let _value = storage.getItem(_key)
        try {
            return JSON.parse(_value)
        } catch (e) {
            return _value
        }       
    },
    remove(key) {
        var _key = prefix + key
        storage.removeItem(_key)
    }
}

module.exports = Localstorage