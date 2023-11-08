import { expect, test} from '@jest/globals';
import {romanToInt} from '../src/RomansToInts'; 

test('III is 3', () =>{
    expect(romanToInt('III')).toBe(3);
});

test('LVIII is 58', () =>{
    expect(romanToInt('LVIII')).toBe(58);
});