class Movies {
  BaseURL = 'https://api.tvmaze.com/search/shows?q=';
  invURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ikULMDdkefW4ekGDByKD/';

  async fetchMovies(search = 'marvel', page = '1') {
    const api = `${this.BaseURL}${search}&page=${page}`;
    try {
      const res = await fetch(api);
      const movies = await res.json();
      const likes = await this.fetchInvLike('likes');
      this.render(movies, likes);
    } catch (error) {
      console.log(error, 'errorapi1');
    }
  }

  async fetchInvLike(type) {
    const api = `${this.invURL}${type}`;
    try {
      const res = await fetch(api);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error, 'error,api2');
    }
  }

  async postInvLike(id) {
    try {
      const req = await fetch(this.invURL + 'likes', {
        method: 'POST',
        body: JSON.stringify({ item_id: id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.log(error, 'err');
    }
  }

  async GetComment(id) {
    const api = `${this.invURL}comments?item_id=${id}`;
    try {
      const res = await fetch(api);
      const data = await res.json();
      if (data.length) {
        this.renderComments(data);
      }
    } catch (error) {
      console.log(error, 'error,comment');
    }
  }

  async postComment(item_id, username, comment) {
    try {
      const req = await fetch(this.invURL + 'comments', {
        method: 'POST',
        body: JSON.stringify({ item_id, username, comment }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      this.GetComment(item_id);
    } catch (error) {
      console.log(error, 'err');
    }
  }

  createComment(id) {
    console.log('work');
    commentBtn.onclick = () => {
      if (myUser.value && myInputComment.value) {
        this.postComment(id, myUser.value, myInputComment.value);
        myUser.value = '';
        myInputComment.value = '';
      }
    };
  }

  renderComments(comments) {
    comments.forEach((ele) => {
      const li = document.createElement('li');
      const span = document.createElement('span');
      const span2 = document.createElement('span');
      span.className = 'commentName';
      span2.className = 'commentInfo';
      span.textContent = ele.username;
      span2.textContent = ele.comment;

      [span, span2].forEach((ele) => li.appendChild(ele));
      myComments.appendChild(li);
    });
  }

  renderBackground(movie) {
    main.style.backgroundImage = movie.show.image
      ? window.innerWidth > 1024
        ? `linear-gradient(90deg, #1E293B, #0001,#000000c2,#000000d6, black), url(${movie.show.image.original})`
        : `linear-gradient(#1E293B,  #0001,#0009,#000000c2,#000000d6, black), url(${movie.show.image.original})`
      : 'linear-gradient( #1E293B, #0001,#0009,#000000c2,#000000d6, black), url(https://media.istockphoto.com/vectors/poster-template-with-retro-banner-design-for-presentation-concert-vector-id996101744?b=1&k=20&m=996101744&s=612x612&w=0&h=fHQFQ0stKZm0yagV9i0aYUdH2Wje-Js19-AqRSxhZ3k=)';
    movieChannel.textContent = movie.show.webChannel ? movie.show.webChannel.name : 'N/A';
    movieChannel.href = movie.show.webChannel ? movie.show.webChannel.officialSite : '#';
    movieName.textContent = movie.show.name;
    movieRate.textContent = movie.show.rating.average ? +movie.show.rating.average : 'N/A';
    movieGenre.innerHTML = '';
    movie.show.genres.forEach((genre) => {
      const li = document.createElement('li');
      li.textContent = genre;
      movieGenre.appendChild(li);
    });
    main.classList.remove('opacity-20');
    viewMovie.onclick = () => {
      this.myShowsPopup(movie);
      popUp.classList.remove('hidden');
      closePopup.onclick = () => popUp.classList.add('hidden');
      this.GetComment(movie.show.id);
      this.createComment(movie.show.id);
    };
  }

  myShowsPopup = ({ show }) => {
    popUp.innerHTML = `<div class="popupBackground">
  <section class="popUpWindow">
    <img src="${show.image?.original}" alt="#" class="popupImg">
    <div id='closePopup' class="closeIcon">
    <img src="https://img.icons8.com/color/48/000000/delete-sign--v1.png"/>
    </div>
    <div class="showContent">
    <h2 class="showTitle">${show.name}</h2>
    <div class="myScrollContent">
    <div class="showInfo">
    <p id="mySum">${show.summary}</p>
    <div class="moreInfo">
        <p class="showRate rNumber"><img src="https://img.icons8.com/external-flaticons-flat-circular-flat-icons/64/000000/external-rate-customer-feedback-flaticons-flat-circular-flat-icons.png" class="rate"/>Rating : ${show.rating.average}</p>
        <p class="showRate"><img src="https://img.icons8.com/external-flaticons-flat-circular-flat-icons/64/000000/external-live-tv-live-streaming-flaticons-flat-circular-flat-icons.png" class="rate"/>Genres : ${show.genres}</p>
        <p class="showRate"><img src="https://img.icons8.com/external-flaticons-flat-circular-flat-icons/64/000000/external-on-air-live-streaming-flaticons-flat-circular-flat-icons.png" class="rate"/>Language : ${show.language}</p>
        <p class="showDates hideDesk"><img src="https://img.icons8.com/external-flaticons-flat-circular-flat-icons/64/000000/external-estimate-engineering-flaticons-flat-circular-flat-icons.png" class="rate"/>
        Premiered : ${show.premiered} - Ended : ${show.ended}</p>
    </div>
    <p class="showDates hideMob"><img src="https://img.icons8.com/external-flaticons-flat-circular-flat-icons/64/000000/external-estimate-engineering-flaticons-flat-circular-flat-icons.png" class="rate"/>
      Premiered : ${show.premiered} - Ended : ${show.ended}</p>
    </div>

    <div class"commentSection">
      <h3 class="commentTitle">Comments</h3>
      <ul id="myComments">
      </ul>
    </div>
    </div>

    <div class="createComment">
      <h3 id="inputTitle">Add a Comment</h3>
      <div id="inputSection">
        <input id="myUser"type="text" placeholder="Your name" required>
        <textarea id="myInputComment" name="user_name" id="user-message" maxlength="500" placeholder="Your insights" required></textarea>
        <input type="submit" value="Comment" id="commentBtn">
      </div>
    </div>
   </div>
  </section>
</div>`;
  };

  render(data, likes) {
    this.renderBackground(data[0]);
    data.forEach((movie) => {
      const likeNum = likes.find((ele) => ele.item_id === movie.show.id);
      const li = document.createElement('li');
      const div = document.createElement('div');
      const div2 = document.createElement('div');
      const span = document.createElement('span');
      const spanComment = document.createElement('span');
      const span2 = document.createElement('span');
      const span3 = document.createElement('span');
      const p = document.createElement('p');
      li.onclick = () => {
        main.classList.add('opacity-20');
        setTimeout(() => this.renderBackground(movie), 300);
      };
      span.textContent = movie.show.status;
      p.textContent = movie.show.name;
      span2.textContent = movie.show.rating.average ? '⭐' + movie.show.rating.average : 'No Rate';
      span3.textContent = likeNum ? likeNum.likes + '❤️' : '🖤';
      spanComment.textContent = '📝';
      span3.onclick = () => {
        this.postInvLike(movie.show.id);
        span3.textContent = likeNum?.likes ? likeNum.likes + 1 + '❤️' : '1❤️';
      };
      spanComment.onclick = () => {
        this.myShowsPopup(movie);
        popUp.classList.remove('hidden');
        closePopup.onclick = () => popUp.classList.add('hidden');
        this.GetComment(movie.show.id);
        this.createComment(movie.show.id);
      };
      [span2, spanComment, span3].forEach((ele) => div2.appendChild(ele));
      div.appendChild(div2);
      div.style.backgroundImage = movie.show.image
        ? `url(${movie.show.image.original})`
        : 'url(https://media.istockphoto.com/vectors/poster-template-with-retro-banner-design-for-presentation-concert-vector-id996101744?b=1&k=20&m=996101744&s=612x612&w=0&h=fHQFQ0stKZm0yagV9i0aYUdH2Wje-Js19-AqRSxhZ3k=)';
      [span, div, p].forEach((ele) => li.appendChild(ele));
      listOfMovies.appendChild(li);
    });
  }
}

const movies = new Movies();
export default movies;
