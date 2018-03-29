import React, { Component } from 'react';
import SearchBar from "./components/search_bar";
import Navigation from "./components/navigation.js";
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
    this.genreChange = this.genreChange.bind(this);
  }

  genreChange(genre) {
    console.log(genre);
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${APIkey}&sort_by=popularity.desc&with_genres=${genre}`)
    
      .then(response => this.setState({movies: response.data.results}))
      .catch(err => console.log(err))
  };

  videoSearch(term) {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${APIkey}&query=${term}&page=1`)
      .then(response => this.setState({movies: response.data.results}))
      .catch(err => console.log(err))
  };


  render() {
    return (
      <div className="App">
        <Navigation genreChange={this.genreChange} onSearchTermChange={this.videoSearch} />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
