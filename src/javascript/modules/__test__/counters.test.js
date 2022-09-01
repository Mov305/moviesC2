/**
 * @jest-environment jsdom
 */

import {
  GetCommentNumber,
  fakeData,
  render,
  data,
} from './__mocks__/counters.js';

describe('Comment Test', () => {
  test('Get number of comments', () => {
    expect(GetCommentNumber(fakeData)).toBe(3);
  });
});

describe('Item Counter', () => {
  test('Get Item count', () => {
    render(data);
    const item = document.querySelectorAll('#movieList li');
    expect(item).toHaveLength(4);
  });
});
