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
    let counter = 0;
    comments.forEach((ele) => {
      counter++;
      return counter;
    });
    return counter;
}

module.exports = { GetCommentNumber, fakeData };