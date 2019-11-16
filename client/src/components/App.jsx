import React from 'react';
import SearchBar from './SearchBar.jsx';
import MovieList from './MovieList.jsx';
import SearchList from './SearchList.jsx';
import AddMovies from './AddMovies.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      search: null
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleAddMovies = this.handleAddMovies.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.updateClass = this.updateClass.bind(this);
  }

  handleAddMovies(movie) {
    event.preventDefault();
    const state = this.state.movies.slice();
    state.push( {title: movie} );
    this.setState({
      movies: state,
    })
  }

  handleSearch(search) {
    event.preventDefault();
    this.setState({
      search: search
    })
    console.log(search);
  }

  handleReset(search) {
    this.handleSearch(search);
  }

  updateClass() {
    console.log('hi');
  }

  render() {
    return (
      <div>
        <AddMovies add={this.handleAddMovies} />
        <SearchBar search={this.handleSearch} reset={this.handleReset} />
        <MovieList movies={this.state.movies} search={this.state.search} />
      </div>
    );
  }
}

export default App;