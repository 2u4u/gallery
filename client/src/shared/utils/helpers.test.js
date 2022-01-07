import each from 'jest-each';
import expect from 'expect';
import { getCorrectHMS, getFileType, addLeadingZero } from './helpers';

describe('getCorrectHMS should ', () => {
    each`
    input           | output
    ${10860}        | ${'03:01:00'}
    ${10861}        | ${'03:01:01'}
    ${60}           | ${'01:00'}
    ${1}            | ${'00:01'}
    ${360}          | ${'06:00'}
    `.test('getCorrectHMS ${input} to ${output}', ({ input, output }) => {
        expect(getCorrectHMS(input)).toBe(output);
    })
});

describe('getFileType should ', () => {
    each`
    input           | output
    ${'audio/mp3'}        | ${'audio'}
    ${'video/mp4'}        | ${'video'}
    ${'image/jpeg'}       | ${'image'}
    `.test('getFileType ${input} to ${output}', ({ input, output }) => {
        expect(getFileType(input)).toBe(output);
    })
});

describe('addLeadingZero should ', () => {
    each`
    input           | output
    ${'2'}          | ${'02'}
    ${'0'}          | ${'00'}
    ${'20'}         | ${'20'}
    `.test('addLeadingZero ${input} to ${output}', ({ input, output }) => {
        expect(addLeadingZero(input)).toBe(output);
    })
});