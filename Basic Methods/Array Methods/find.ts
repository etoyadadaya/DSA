function find (array, callback) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (callback(element, i, array)) return element;
    }
}