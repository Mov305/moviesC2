import { render, renderComments } from './Dom.js';

class Movies {
  BaseURL = 'https://api.tvmaze.com/search/shows?q=';

  invURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ikULMDdkefW4ekGDByKD/';

  async fetchMovies(search = 'marvel') {
    const api = `${this.BaseURL}${search}`;
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
      const data = req.json();
      return data;
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
        this.GetCommentNumber(data);
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
      this.GetCommentNumber(item_id);
      const data = req.json();
      return data;
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
    renderComments(comments);
  }

  GetCommentNumber(comments) {
    const counter = comments.length || 0;
    commentCount.textContent = 'Comment Count: ' + counter;
  }

  render(data, likes) {
    render(data, likes);
  }
}

const movies = new Movies();
export default movies;
