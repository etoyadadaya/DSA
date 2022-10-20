function flat(array, depth = 1) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (Array.isArray(element) && depth > 0) {
            newArray.push(...flat(element, depth - 1));
        } else {
            newArray.push(element);
        }
    }
    return newArray;
}