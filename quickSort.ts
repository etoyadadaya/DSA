const quickSort = (arr: number[]): number[] => {
    if (arr.length <= 1) {
        return arr;
    }

    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr[pivotIndex];
    let less = [];
    let greater = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === pivotIndex) {
            continue;
        } else if (arr[i] < pivot) {
            less.push(arr[i]);
        } else {
            greater.push(arr[i]);                          
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)];
}
                              
let arr = [5,3,2,1,8,9,6,5,3,4,21,43,31,12,76,56,54,32,44,89,100,122,90,80,70,50];
console.log(quickSort(arr));
