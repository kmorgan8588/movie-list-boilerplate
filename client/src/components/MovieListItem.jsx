import React from 'react';

class MovieListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            watched: false,
            extras: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleExtras = this.handleExtras.bind(this);
    }

    handleClick() {
        this.setState({
            watched: !this.state.watched
        })
    }

    handleExtras() {
        this.setState({
            extras: !this.state.extras,
        })
    }

    handleSearch(search, title) {
        let lowSearch;
        let result;
        if (search === null ? lowSearch = search : search.length > 0 ? lowSearch = search.toLowerCase() : lowSearch = '***');
        const lowMovie = title.toLowerCase();
        if (lowMovie.includes(lowSearch) ? result = true : result = false);
        return result;
    }

    render() {
        const { title, release_date, overview, popularity, poster_path } = this.props.movie;
        const { search, watch } = this.props;
        const extras = this.state.extras;
        const searched = this.handleSearch(search, title);
        const watched = this.state.watched;        
        const option = { true: 'watched', false: 'watch soon' };
        const path = 'https://image.tmdb.org/t/p/w500';

        console.log(this.props);
        if(watch === watched){
        return (
            <tr onClick={this.handleExtras}>
                <td className={ searched ? 'searched' : 'none' } >{title}</td>
                {extras ? <tr><td>Release Date: {release_date}</td>
                <td>Popularity: {popularity}</td>
                <td><img src={path+poster_path} height='150' width='100'/></td>
                <td>Overview: {overview}</td>
                <td><button className='watch' onClick={this.handleClick} >{option[watched]}</button>
                </td>
                </tr> : <td>Click for more details</td>}
            </tr>
        );
    } else {
        return null;
    }
    }
}



export default MovieListItem;