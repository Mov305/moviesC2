
import '../css/style.css'
import '../css/index.css'
import movies from './modules/movies.js'
import {setUi} from './modules/usages.js'
import myShowsPopup from './modules/popup.js';

myShowsPopup();
setUi()
movies.fetchMovies();

