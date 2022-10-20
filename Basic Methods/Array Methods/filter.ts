function filter(array, callback) {
    const newArray = [];
    for (let i = 0; array.length; i++) {
        const element = array[i];
        if (callback(element, i, array)) newArray.push(element);
    }
    return newArray;
}