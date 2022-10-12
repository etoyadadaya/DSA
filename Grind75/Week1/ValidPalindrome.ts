function isPalindrome(s: string): boolean {
  let cleanStr = cleanUp(s);
  return isPal(cleanStr);
}

function cleanUp(str: string): string {
  let newStr = "";
  let char = "qwertyuiopasdfghjklzxcvbnm1234567890"

  for (let i = 0; i < str.length; i++) {
    let lowercase = str[i].toLowerCase();

    if (char.indexOf(lowercase)) {
      newStr += lowercase;
    }
  }
  return newStr;
}

function isPal(str: string): boolean {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}


