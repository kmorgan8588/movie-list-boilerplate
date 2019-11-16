import React from 'react';
import MovieListItem from './MovieListItem.jsx';

const SearchList = props => {
    const { movies, search, toggle } = props;
    return (
        <table className='search' >
            <tbody><tr><td><br />Your search includes: </td></tr></tbody>
            <tbody>
                {movies.map(movie => {
                    let lowSearch;
                    if (search === null ? lowSearch = search : search.length > 0 ? lowSearch = search.toLowerCase() : lowSearch = '***');
                    const lowMovie = movie.title.toLowerCase();
                    if (lowMovie.includes(lowSearch)) return <MovieListItem movie={movie} key={movie.title + 'searched'} toggle={toggle} />
                })}
            </tbody>
        </table>
    )
};




export default SearchList;