const linearSearch = (arr: number[], item: number): number | null => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }
  return null;
}

let arr = [1, 3, 5, 7, 9, 2, 4, 6, 8, 0];

console.log(linearSearch(arr, 8)); // 8
console.log(linearSearch(arr, 11)); // null
