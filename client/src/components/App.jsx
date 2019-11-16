import React from 'react';
import SearchBar from './SearchBar.jsx';
import MovieList from './MovieList.jsx';
import AddMovies from './AddMovies.jsx';
import Watched from './Watched.jsx';
import ToWatch from './ToWatch.jsx';

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