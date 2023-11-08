import { expect, test} from '@jest/globals';
import {isPalindrome} from '../src/Palindrome';

test('101 is Palindrome', () =>{
    expect(isPalindrome(101)).toBe(true);
});