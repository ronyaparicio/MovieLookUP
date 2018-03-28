import React, { Component } from 'react';
import SearchBar from "./components/search_bar";


import axios from  "axios";
import './App.css';

const APIkey = 'dfc918e89334423f004fdc14fda75e92';
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: []
    };
  }

  videoSearch(term) {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${APIkey}&query=${term}&page=1`)
      .then(response => {
        console.log(response)
        const movies = response.data.results;
        this.setState({movies});
      })
      .catch(err => console.log(err))
  };


  render() {
    return (
      <div className="App">
        <SearchBar onSearchTermChange={this.videoSearch} />
      </div>
    );
  }
}

export default App;
