import React from 'react';
import MovieListItem from './MovieListItem.jsx';


const MovieList = ({ movies, search, watch }) => (
    <table className = 'movies'>
        <tbody>
            {movies.map(movie =>
                <MovieListItem movie={movie} key={movie.id} search={search} watch={watch} />)}
        </tbody>
    </table>
);




export default MovieList;