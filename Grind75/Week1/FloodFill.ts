function floodFill(image: number[][], sr: number, sc: number, newColor: number): number[][] {
  if (image[sr][sc] !== newColor) {
    helper(image[sr][sc], newColor, sr, sc, image);
  }
  return image;
}

function helper(oldColor: number, newColor: number, sr: number, sc: number, image: number[][]) {
  image[sr][sc] = newColor;
  // left
  if (sc - 1 >= 0 && image[sr][sc - 1] === oldColor) {
    helper(oldColor, newColor, sr, sc - 1, image);
  }
  // right
  if (sc + 1 < image[sr].length && image[sr][sc + 1] === oldColor) {
    helper(oldColor, newColor, sr, sc + 1, image);
  }
  // top
  if (sr - 1 >= 0 && image[sr - 1][sc] === oldColor) {
    helper(oldColor, newColor, sr - 1, sc, image);
  }
  // bot
  if (sr + 1 < image.length && image[sr + 1][sc] === oldColor) {
    helper(oldColor, newColor, sr + 1, sc, image);
  }
}
