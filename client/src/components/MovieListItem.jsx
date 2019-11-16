import React from 'react';

class MovieListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            watched: false,
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleClick() {
        this.setState({
            watched: !this.state.watched
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
        const { title } = this.props.movie;
        const { search, watch } = this.props;
        const searched = this.handleSearch(search, title);
        const watched = this.state.watched;        
        const option = { true: 'watched', false: 'watch soon' };
        console.log(this.state);
        if(watch === watched){
        return (
            <tr>
                <td className={ searched ? 'searched' : 'none' } >{title}</td>
                <td><button className='watch' onClick={this.handleClick} >{option[watched]}</button>
                </td>
            </tr>
        );
    } else {
        return null;
    }
    }
}



export default MovieListItem;