// ascending order
// [5,3,2,1,8,9,6,5,3,4,21,43,31,12,76,56,54,32,44,89,100,122,90,80,70,50] => 
// [1, 2, 3, 3, 4, 5, 5, 6, 8, 9, 12, 21, 31, 32, 43, 44, 50, 54, 56, 70, 76, 80, 89, 90, 100, 122]

const quickSortAscending = (arr: number[]): number[] => {
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
    return [...quickSortAscending(less), pivot, ...quickSortAscending(greater)];
}
                              
let arrAscending = [5,3,2,1,8,9,6,5,3,4,21,43,31,12,76,56,54,32,44,89,100,122,90,80,70,50];
console.log(quickSortAscending(arrAscending));


// descending order
// [5,3,2,1,8,9,6,5,3,4,21,43,31,12,76,56,54,32,44,89,100,122,90,80,70,50] => 
// [122, 100, 90, 89, 80, 76, 70, 56, 54, 50, 44, 43, 32, 31, 21, 12, 9, 8, 6, 5, 5, 4, 3, 3, 2, 1] 

const quickSortDescending = (arr: number[]): number[] => {
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
    return [...quickSortDescending(greater), pivot, ...quickSortDescending(less)];
}
                              
let arrDescending = [5,3,2,1,8,9,6,5,3,4,21,43,31,12,76,56,54,32,44,89,100,122,90,80,70,50];
console.log(quickSortDescending(arrDescending));
