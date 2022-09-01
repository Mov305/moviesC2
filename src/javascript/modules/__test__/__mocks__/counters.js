/**
 * @jest-environment jsdom
 */

const fakeData = [
  {
    user_id: 1,
    username: 'Lane',
    comment: 'I loved this movie.',
  },
  {
    user_id: 2,
    username: 'Chris',
    comment: 'Totally inlove with the characters.',
  },
  {
    user_id: 1,
    username: 'Laura',
    comment: 'Amazing, I want to see the second part.',
  },
];

const GetCommentNumber = (comments) => {
  const counter = comments.length;
  return counter;
};

const data = [
  { id: 1, item: '1' },
  { id: 1, item: '1' },
  { id: 1, item: '1' },
  { id: 1, item: '1' },
];

const render = (data) => {
  document.body.innerHTML = '<ul id = "movieList" ></ul>';
  const movieList = document.getElementById('movieList');
  data.forEach((ele) => {
    const li = document.createElement('li');
    li.textContent = ele.item;
    movieList.appendChild(li);
  });
};

module.exports = {
  GetCommentNumber,
  fakeData,
  render,
  data,
};
