// Max Heap for Min Heap we need to change:
// "arr[left] > arr[largest]" and "arr[right] > arr[largest]" to "arr[left] < arr[largest]" and "arr[right] < arr[largest]"
// *8 and 11 column*

const heapify = (arr: number[], length: number, parentIndex: number) => {
  let largest = parentIndex;
  const left = parentIndex * 2 + 1;
  const right = left + 1;

  if (left < length && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < length && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest !== parentIndex) {
    [arr[parentIndex], arr[largest]] = [arr[largest], arr[parentIndex]];
    heapify(arr, length, largest);
  }

  return arr;
}

const heapSort = (arr: number[]) => {
  const length = arr.length;
  let lastParentIndex = Math.floor(length / 2 - 1);
  let lastChildIndex = length - 1;

  while(lastParentIndex >= 0) {
    heapify(arr, length, lastParentIndex);
    lastParentIndex--;
  }

  while(lastChildIndex >= 0) {
    [arr[0], arr[lastChildIndex]] = [arr[lastChildIndex], arr[0]];
    heapify(arr, lastChildIndex, 0);
    lastChildIndex--;
  }

  return arr;
}

let arr = [4,6,3,2,9];  // [2, 3, 4, 6, 9]

console.log(heapSort(arr));
