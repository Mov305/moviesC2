class Movies {
  BaseURL = 'https://api.tvmaze.com/search/shows?q=';

  async fetchMovies(search = 'marvel', page = '1') {
    const api = `${this.BaseURL}${search}&page=${page}`;
    try {
      const res = await fetch(api);
      const movies = await res.json();
      this.render(movies);
    } catch (error) {
      console.log(error);
    }
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
  }

  render(data) {
    this.renderBackground(data[0]);
    data.forEach((movie) => {
      const li = document.createElement('li');
      const div = document.createElement('div');
      const div2 = document.createElement('div');
      const span = document.createElement('span');
      const span2 = document.createElement('span');
      const span3 = document.createElement('span');
      const p = document.createElement('p');
      li.onclick = () => this.renderBackground(movie);
      span.textContent = movie.show.status;
      p.textContent = movie.show.name;
      span2.textContent = movie.show.rating.average ? '⭐' + movie.show.rating.average : 'No Rate';
      span3.textContent = '🖤❤️';
      [span2, span3].forEach((ele) => div2.appendChild(ele));
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
