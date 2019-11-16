import React from 'react';
import MovieListItem from './MovieListItem.jsx';


const MovieList = ({ movies }) => (
    <table className = 'movies'>
        <tbody>
            {movies.map(movie =>
                <MovieListItem movie={movie} key={movie.title} />)}
        </tbody>
    </table>
);




export default MovieList;