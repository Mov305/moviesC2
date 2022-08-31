class Movies {
  BaseURL = 'https://api.tvmaze.com/search/shows?q=';

  async fetchMovies(search = 'marvel', page = '1') {
    const api = `${this.BaseURL}${search}&page=${page}`;
    try {
      const res = await fetch(api);
      const movies = await res.json();
      console.log(movies);
      return movies;
    } catch (error) {
      return error;
    }
  }
}

const movies = new Movies();
export default movies;
