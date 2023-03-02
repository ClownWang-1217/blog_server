class BaseIterator {
    constructor(obj) {
        if (Object.prototype.toString.call(obj) !== '[object Object]') {
            throw Error('initial param is not an Object');
        }
        this.obj = obj;
    }
}
//sql execute Iterator
class SqlIterator extends BaseIterator {
    constructor(obj) {
        super(obj);
        this.keys = Object.keys(this.obj);
        this.values = Object.values(this.obj);
        this.limit = this.keys.length;
    }
    [Symbol.iterator]() {
        let count = 0;
        let that = this;
        return {
            next() {
                if (count < that.keys.length) {
                    count++;
                    return { done: false, value: [that.keys[count - 1], that.values[count - 1]] };
                } else {
                    return { done: true, value: undefined };
                }
            }
        }
    }
}

module.exports = {
    SqlIterator
}
