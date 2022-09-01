/**
 * @jest-environment jsdom
 */

const { GetCommentNumber, fakeData } = require('./__mocks__/counters.js');

describe('First Test', () => {
    test('Get number of comments', () => {
      expect(GetCommentNumber(fakeData)).toBe(3);
    });
  });