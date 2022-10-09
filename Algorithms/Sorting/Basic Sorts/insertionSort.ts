// Ascending order
// [1,3,5,7,9,0,2,4,6,8] => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const insertionSortAscending = (arr: number[]) => {
    for(let i = 0; i < arr.length; i++) {
            for(let j = i + 1; j < arr.length; j++) {
                if(arr[j] < arr[i]) {
                    let tmp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = tmp;
                }
            }
        }
    return arr;
}

const arrAscending = [1,3,5,7,9,0,2,4,6,8];

console.log(insertionSortAscending(arrAscending));


// Descending order
// [1,3,5,7,9,0,2,4,6,8]  => [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

const insertionSortDescending = (arr: number[]) => {
    for(let i = 0; i < arr.length; i++) {
            for(let j = i + 1; j < arr.length; j++) {
                if(arr[j] > arr[i]) {
                    let tmp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = tmp;
                }
            }
        }
    return arr;
}

const arrDescending = [1,3,5,7,9,0,2,4,6,8];

console.log(insertionSortDescending(arrDescending));
