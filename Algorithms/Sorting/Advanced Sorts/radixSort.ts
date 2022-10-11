// radixSort

const radixSort = (arr: number[]) => {
  const maxNum = Math.max(...arr);
  let digit = 0;

  while (maxNum / (10 ** digit) > 0) {
    helper(arr, digit);
    digit++;
  }
  return arr;
}

const helper = (arr: number[], digit: number) => {
  let countArray = new Array(10).fill(0);
  let sortArray = new Array(arr.length).fill(0);

  let whichDigit = 10 ** digit;

  for (let num of arr) {
    const countIndex = Math.floor(num / whichDigit) % 10;
    countArray[countIndex]++;
  }

  for (let i = 1; i < countArray.length; i++) {
    countArray[i] += countArray[i - 1];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    const countIndex = Math.floor(arr[i] / whichDigit) % 10;
    countArray[countIndex]--;
    const sortIndex = countArray[countIndex];
    sortArray[sortIndex] = arr[i];
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = sortArray[i];
  }

  return arr;
}

let arr = [8562, 454, 9028, 415, 67, 234, 85, 12, 2];

console.log(radixSort(arr));
