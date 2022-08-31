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

  render(data) {
    main.style.backgroundImage =
      window.innerWidth > 640
        ? `linear-gradient(90deg, #0001,#000000c2,#000000d6, black), url(${data[0].show.image.original})`
        : `linear-gradient(  #0001,#0009,#000000d6, black), url(${data[0].show.image.original})`;
    data.forEach((movie) => {
      const li = document.createElement('li');
      const div = document.createElement('div');
      const div2 = document.createElement('div');
      const span = document.createElement('span');
      const span2 = document.createElement('span');
      const span3 = document.createElement('span');
      const p = document.createElement('p');
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
