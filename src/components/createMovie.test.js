/**
 * @jest-environment jsdom
 */

import createMovie from './createMovie.js';

describe('create a movie element', () => {
    const movieDom = createMovie({
        id: 1,
        title: 'The Matrix',
        poster: 'https://via.placeholder.com/150',
    });

    test('Node name -> "DIV"', () => {
        expect(movieDom.nodeName).toEqual('DIV');
    });

    test('has a class -> "movie"', () => {
        expect(movieDom.className).toEqual('movie');
    });

    test('has a class -> "movie"', () => {
        expect(movieDom.childElementCount).toEqual(2);
    });

    test('first child -> img', () => {
        expect(movieDom.firstChild.nodeName).toEqual('IMG');
    });

    test('second child -> h2', () => {
        expect(movieDom.children[1].nodeName).toEqual('H2');
    });
});
