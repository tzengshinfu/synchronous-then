function then(callback) {
    if (typeof (callback) !== 'function') {
        throw new TypeError('"callback" is not a function');
    }

    let self = this instanceof Date ? this : this.valueOf();
    let result = callback(self);
    return result;
}

function addProperty(obj, key, value) {
    if (obj.hasOwnProperty(key)) {
        throw new TypeError(`can't define property "${key}": property "${key}" has existed`);
    }

    Object.defineProperty(obj, key, {
        value: value,
        writable: true
    });
}

addProperty(Number.prototype, 'then', then);
addProperty(Date.prototype, 'then', then);
addProperty(String.prototype, 'then', then);
addProperty(BigInt.prototype, 'then', then);
