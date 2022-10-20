// should know

const bubbleSort = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
}

let arr = [1, 3, 5, 7, 9, 2, 4, 6, 8, 0];

console.log(bubbleSort(arr));
