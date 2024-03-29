import data from '../data.js';
import dom from '../dom.js';
import createMovie from '../components/createMovie.js';

const loadHandler = () => {
    data.movies.forEach((movie) => {
        const movieDom = createMovie(movie);
        dom.movies.append(movieDom);
    });
};

export default loadHandler;
