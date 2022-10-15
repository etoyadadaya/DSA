function addBinary(a: string, b: string): string {
    let answer = "";
    let aLen = a.length - 1;
    let bLen = b.length - 1;
    let carry = false;

    while (aLen >= 0 || bLen >= 0) {
        let aNum = aLen >= 0 ? Number(a[aLen]) : 0;
        let bNum = bLen >= 0 ? Number(b[bLen]) : 0;

        let sum = aNum + bNum;
        if (carry) {
            sum++;
        }
        if (sum === 0) {
            answer = "0" + answer;
            carry = false;
        } else if (sum === 1) {
            answer = "1" + answer;
            carry = false;
        } else if (sum === 2) {
            answer = "0" + answer;
            carry = true;
        } else {
            answer = "1" + answer;
            carry = true;
        }
        aLen--;
        bLen--;
    }
    if (carry) {
        return answer = "1" + answer;
    } else {
        return answer;
    }
}