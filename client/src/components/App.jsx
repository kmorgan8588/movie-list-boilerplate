import React from 'react';
import SearchBar from './SearchBar.jsx';
import MovieList from './MovieList.jsx';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: this.props.movies
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(search) {
    event.preventDefault();
    console.log(search.value);
  }

  render() {
    return (
      <div>
        <SearchBar search={this.handleSearch} />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

// const App = (props) => (
//   <div>
//     <SearchBar />
//     <MovieList movies={props.movies} />

//   </div>
// );

export default App;