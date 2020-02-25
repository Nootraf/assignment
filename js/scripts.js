function incrementFartoon(x) {
    var splits = x.split(/(\d+)$/),
        one = 1;
    if (splits[1] !== undefined) one = parseInt(splits[1]) + 1;
    return splits[0] + one;
} <
undefined
incrementFartoon('foo143');
"foo144"