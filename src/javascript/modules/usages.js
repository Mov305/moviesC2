import logoimg from '../../../assets/logo_transparent.png';
import imdbimg from '../../../assets/imdb.svg';
import movies from './movies.js';

const setUi = () => {
  logo.src = logoimg;
  imdb.src = imdbimg;
  searchIcon.addEventListener('click', () => {
    if (!searchInput.value) {
      searchInput.classList.toggle('inputHide');
      inputField.classList.toggle('grow');
      inputField.classList.toggle('md:w-12');
    } else {
      movies.fetchMovies(searchInput.value);
    }
  });
};

export default setUi;
