function make() {
    let numbers = [];
    function f() {
        let args = [...arguments];
        for (let i = 0; i < args.length; i++) {
            if ('function' === typeof args[i]) {
                return numbers.reduce(args[i]);
            } else {
                numbers.push(args[i]);
            }
        }
        return f;
    }
    return f(...arguments);
}

function sum(a, b) {
    return a + b;
};
exports.make = make;
exports.sum = sum;