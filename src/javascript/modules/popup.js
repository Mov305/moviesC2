import movies from './movies.js';

const myBody = document.querySelector('body');
const myAppId = 'eNh0z3Fwr51ftZcGUctd';
const myApiURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${myAppId}/comments`;
/* const myApiGet = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/eNh0z3Fwr51ftZcGUctd/comments?item_id=item${i}`; */

const myCommentList = document.getElementById('myComments');
const userName = document.getElementById('myUser');
const userComment = document.getElementById('myInputComment');

const myShowsPopup = async () => {
  const myShowsGet = await movies.fetchMovies();
  myShowsGet.forEach((show) => {
    myBody.innerHTML = `<div class="popupBackground">
    <section class="popUpWindow">
      <img src="${show.show.image.original}" alt="#" class="popupImg">

      <div class="showContent">
      <div class="showInfo">
      <h2 class="showTitle">${show.show.name}</h2>
      <p id="mySum">${show.show.summary}</p>
      <p class="showDates">Premiered : ${show.show.premiered} - Ended : ${show.show.ended}</p>
      </div>

      <div class"commentSection">
        <h3 class="commentTitle">Comments</h3>
        <ul id="myComments">
        <li>hello</li>
        <li>hello</li>
        </ul>
      </div>

      <div class="createComment">
        <h3 id="inputTitle">Add a Comment</h3>
        <form action="#" method="POST" id="inputSection">
          <input id="myUser"type="text" placeholder="Your name" required>
          <textarea id="myInputComment" name="user_name" id="user-message" maxlength="500" placeholder="Your insights" required></textarea>
          <input type="submit" value="Comment" id="commentBtn">
        </form>
      </div>
     </div>
    </section>
  </div>`;

    const sendComment = async () => {
      try {
        const myResponse = await fetch(myApiURL, {
          method: 'POST',
          body: JSON.stringify({
            item_id: show.show.id.value,
            username: userName.value,
            comment: userComment.value,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
        userName.value = '';
        userComment.value = '';
        return await myResponse.json();
      } catch (error) {
        return error;
      }
    };

      const displayComments = () => {
      const myListComments = sendComment();
      myCommentList.innerHTML = '';
      myListComments.forEach((showC) => {
        myCommentList.innerHTML += `<li>${showC.username} : ${showC.comment}</li>`;
      });
    };

    myCommentList.addEventListener('submit', (e) => {
      e.preventDefault();
      displayComments();
      sendComment();
    });
  });
};

export { myShowsPopup as default };