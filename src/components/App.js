import React, { Component } from "react";
import "../App.css";
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";


const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b"; // you should replace this with yours


// const App = () => {
//   const [loading, setLoading] = useState(true);
//   const [movies, setMovies] = useState([]);
//   const [errorMessage, setErrorMessage] = useState(null);
//   const [type, setType] = useState('all');

//     useEffect(() => {
    // fetch(MOVIE_API_URL)
    //   .then(response => response.json())
    //   .then(jsonResponse => {
    //     setMovies(jsonResponse.Search);
    //     setLoading(false);
    //   });
//   }, []);

//   const changeType = (e, type) => {

//     console.log(type)
//   }

    // const search = searchValue => {
    // setLoading(true);
    // setErrorMessage(null);

    // fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
    //   .then(response => response.json())
    //   .then(jsonResponse => {
    //     if (jsonResponse.Response === "True") {
    //       setMovies(jsonResponse.Search);
    //       setLoading(false);
    //     } else {
    //       setErrorMessage(jsonResponse.Error);
    //       setLoading(false);
    //     }
    //   });
    // };

//     return (
//      <div className="App">
//       <Header text="Magical Movie Finder" changeType={changeType} />
//       <Search search={search} />
//       <p>{type}</p>
//       <div className="movies">
//         {loading && !errorMessage ? (
//          <span>loading...</span>
//          ) : errorMessage ? (
//           <div className="errorMessage">{errorMessage}</div>
//         ) : (
//           movies.map((movie, index) => (
//             <Movie className="movie" key={`${index}-${movie.Title}`} movie={movie} />
//           ))
//           )}
//       </div>
//     </div>
//   );
// };

class App extends React.Component {
  constructor (props) {
    super(props);
      this.state = {
        loading: true,
        type: 'all',
        errorMessage: '',
        movies: [],
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
      type: type
    })
  }

  search = (searchValue) => {
    this.setState({
      ...this.state,
      setLoading: true,
      errorMessage: null,
    })

    var link = ''

    if (this.state.type === 'all') {
      link = `https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`
    } else {
      link = `https://www.omdbapi.com/?type=${this.state.type}&s=${searchValue}&apikey=4a3b711b`
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