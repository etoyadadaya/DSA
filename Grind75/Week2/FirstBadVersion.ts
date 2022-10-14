var solution = function(isBadVersion: any) {
  return function (n: number): number {
    let low = 1;
    let high = n;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if(isBadVersion(mid)) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return high + 1;
  }
}