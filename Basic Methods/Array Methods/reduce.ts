function reduce(array, callback, initialValue) {
    let currentValue = initialValue;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (initialValue == null && i === 0) {
            currentValue = element;
        } else {
            currentValue = callback(currentValue, element, i, array);
        }
    }
    return currentValue;
}