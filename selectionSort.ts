// ascending order
// [1,3,5,7,9,0,2,4,6,8] => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const selectionSortAscending = (arr: number[]) => {
    for (let i = 0; i < arr.length; i++) {
        let indexMin = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexMin]) {
                indexMin = j;
            }
        }
        let tmp = arr[i];
        arr[i] = arr[indexMin];
        arr[indexMin] = tmp; 
    }
    return arr;
}

const arrAscending = [1,3,5,7,9,0,2,4,6,8];

console.log(selectionSortAscending(arrAscending));

                                       
// descending order
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
                                       
const selectionSortDescending  = (arr: number[]) => {
    for (let i = 0; i < arr.length; i++) {
        let indexMin = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[indexMin]) {
                indexMin = j;
            }
        }
        let tmp = arr[i];
        arr[i] = arr[indexMin];
        arr[indexMin] = tmp; 
    }
    return arr;
}

const arrDescending = [1,3,5,7,9,0,2,4,6,8];

console.log(selectionSortDescending(arrDescending));         
