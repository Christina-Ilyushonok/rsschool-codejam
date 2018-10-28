function recursion(node, arr, depth) {
    arr = arr || [];
    depth = depth || 0;
    let values = arr[depth];
    if (values) {
        values.push(node.value);
    } else {
        arr[depth] = [node.value];
    }
    depth++;
    if (node.left) {
        recursion(node.left, arr, depth);
    }
    if (node.right) {
        recursion(node.right, arr, depth);
    }
    return arr;
};
exports.recursion = recursion;