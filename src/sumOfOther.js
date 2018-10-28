function sumOfOther(arr){
    let sum = arr.reduce(function add(a, b) {
        return a + b;
    }, 0);
    let arrSum = [];
    arr.forEach(function (item) {
        arrSum.push(sum - item)
    });
    return arrSum;
};
