const sortArray = (arr: number[]): any => {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(sortArray(left), sortArray(right));
}

const merge = (left: number[], right: number[]) => {
  const result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return [...result, ...left, ...right];
}

let arr = [1,3,5,7,9,2,4,6,8,0];

console.log(sortArray(arr));
