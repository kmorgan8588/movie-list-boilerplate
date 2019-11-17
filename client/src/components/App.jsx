import React from 'react';
import SearchBar from './SearchBar.jsx';
import MovieList from './MovieList.jsx';
import AddMovies from './AddMovies.jsx';
import Watched from './Watched.jsx';
import ToWatch from './ToWatch.jsx';
import APIkey from '../APIkey.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      search: null,
      watched: false,
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleAddMovies = this.handleAddMovies.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.toggleWatch = this.toggleWatch.bind(this);
  }

  handleAddMovies(movie) {
    event.preventDefault();
    fetch( `https://api.themoviedb.org/3/search/movie?api_key=${APIkey}&language=en-US&query=${movie}&page=1&include_adult=false`)
    .then(response => response.json())
    .then( response => {
      const state = this.state.movies.slice();
      state.push( response.results[0] );
      this.setState({
        movies: state,
      })
    })
    .catch(err => console.log(err));
  }

  handleSearch(search) {
    event.preventDefault();
    this.setState({
      search: search
    })
  }

  handleReset(search) {
    this.handleSearch(search);
  }

  toggleWatch(state) {
    this.setState({
      watched: state
    })
  }

  render() {
    return (
      <div>
        <AddMovies add={this.handleAddMovies} />
        <SearchBar search={this.handleSearch} reset={this.handleReset} />
        <Watched toggle={this.toggleWatch} />
        <ToWatch toggle={this.toggleWatch}/>
        <MovieList movies={this.state.movies} search={this.state.search} watch={this.state.watched}  />
      </div>
    );
  }
}

export default App;