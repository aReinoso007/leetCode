export function romanToInt(s: string): number {
    const romanToIntegerMap: { [key: string]: number } = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];
        const currentInt = romanToIntegerMap[currentChar];
        const nextChar = s[i + 1];
        const nextInt = romanToIntegerMap[nextChar];

        if (nextInt && currentInt < nextInt) {
            result += nextInt - currentInt;
            i++; // Skip the next character
        } else {
            result += currentInt;
        }
    }

    return result;
};