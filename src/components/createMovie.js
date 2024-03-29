/**
 * Create a movie element
 *
 * @param {Object} movie - movie object
 *      @property {number} movie.id - movie id
 *      @property {string} movie.title - movie title
 *      @property {string} movie.poster - movie poster image url
 *
 * @returns {HTMLElement} movie element
 */

const createMovie = (movie) => {
    const container = document.createElement('div');
    container.classList.add('movie');

    // create title
    const title = document.createElement('h2');
    title.innerText = movie.title;

    // create image
    const img = document.createElement('img');
    img.src = movie.poster;
    img.alt = movie.title;

    // append title and image to container
    container.append(img, title);

    return container;
};

export default createMovie;
