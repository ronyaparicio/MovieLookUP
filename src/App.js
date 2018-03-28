import React, { Component } from 'react';
import SearchBar from "./components/search_bar";
import MovieList from "./components/movie_list.js";


import axios from  "axios";
import './App.css';

const APIkey = 'dfc918e89334423f004fdc14fda75e92';
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: []
    };

    this.videoSearch = this.videoSearch.bind(this);
  }

  videoSearch(term) {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${APIkey}&query=${term}&page=1`)
      .then(response => this.setState({movies: response.data.results}))
      .catch(err => console.log(err))
  };


  render() {
    return (
      <div className="App">
        <SearchBar onSearchTermChange={this.videoSearch} />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
