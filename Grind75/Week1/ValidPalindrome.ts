function isPalindrome(s: string): boolean {
  let cleanStr = cleanUp(s);
  return isPal(cleanStr);
}

function cleanUp(str: string) {
  let char = "qwertyuiopasdfghjklzxcvbnm0123456789";

  let newString = "";

  for (let i = 0; i < str.length; i++) {
    let lowerCase = str[i].toLowerCase();

    if (char.indexOf(lowerCase) !== - 1) {
      newString += lowerCase;
    }
  }
  return newString;
}

function isPal (str: string) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }

  return true;
}
