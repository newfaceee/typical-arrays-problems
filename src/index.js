exports.min = function min(array) {
    if (!array || array.length === 0) return 0;
    return array.reduce((min, curr) => {
        return curr <= min ? curr : min;
    });
};

exports.max = function max(array) {
    if (!array || array.length === 0) return 0;
    return array.reduce((max, curr) => {
        return max <= curr ? curr : max;
    });
};

exports.avg = function avg(array) {
    if (!array || array.length === 0) return 0;
    return array.reduce((acc, curr) => acc + curr) / array.length;
};
