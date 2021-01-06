import React, { Component } from "react";
import "../App.css";
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";


const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";


class App extends Component {
  constructor (props) {
    super(props);
      this.state = {
        loading: true,
        type: 'all',
        errorMessage: '',
        movies: [],
        searchText: 'Man',
      }
  }

  componentDidMount() {
    fetch(MOVIE_API_URL)
    .then(response => response.json())
    .then(jsonResponse => {
      this.setState({
        movies: jsonResponse.Search,
        loading: false
      })
    });
  }

  changeType = (type) => {
    this.setState({
      type: type,
    })

    setTimeout(() => {
      this.search(this.state.searchText)
    }, 200);
  }

  search = (searchValue) => {
    this.setState({
      searchText: searchValue,
      setLoading: true,
      errorMessage: null,
    })

    var link = ''

    if (this.state.type === 'all') {
      link = `https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`
    } else {
      link = `https://www.omdbapi.com/?type=${this.state.type}&s=${searchValue}&apikey=4a3b711b`
      console.log(link);
    }

    fetch(link)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          this.setState({
            movies: jsonResponse.Search,
            loading: false,
          })
        } else {
          this.setState({
            errorMessage: jsonResponse.Error,
            loading: false,
          })
        }
      });
  }

  render() {
    return (
      <div className="App">
             <Header text="Magical Movie Finder" type={this.state.type} changeType={this.changeType} />
             <Search search={this.search} />
             <div className="movies">
               {this.state.loading && !this.state.errorMessage ? (
               <span>loading...</span>
               ) : this.state.errorMessage ? (
                <div className="errorMessage">{this.state.errorMessage}</div>
              ) : (
                this.state.movies.map((movie, index) => (
                  <Movie className="movie" key={`${index}-${movie.Title}`} movie={movie} />
                ))
                )}
            </div>
          </div>
    )
  }
}

export default App;