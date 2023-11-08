import { expect, test} from '@jest/globals';
import {longestCommonPrefix} from '../src/LongestCommonPrefix';

test('["flower","flow","flight"] returns "fl"', () =>{
    expect(longestCommonPrefix(["flower","flow","flight"])).toBe("fl");
});