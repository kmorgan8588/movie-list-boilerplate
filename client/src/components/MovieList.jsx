import React from 'react';
import MovieListItem from './MovieListItem.jsx';


const MovieList = ({ movies, search }) => (
    <table className = 'movies'>
        <tbody>
            {movies.map(movie =>
                <MovieListItem movie={movie} key={movie.title} search={search} />)}
        </tbody>
    </table>
);




export default MovieList;