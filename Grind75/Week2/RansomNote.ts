function canConstruct(ransomNote: string, magazine: string): boolean {
    const map = {};

    for (let i = 0; i < magazine.length; i++) {
        let letter = magazine[i];

        if (!map[letter]) {
            map[letter] = 1;
        } else {
            map[letter]++;
        }
    }

    for (let i = 0; i < ransomNote.length; i++) {
        let letter = ransomNote[i];

        if (map[letter] - 1 < 0 || !map[letter]) {
            return false;
        }
        map[letter]--;
    }

    return true;
}