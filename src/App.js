import React, { Component } from 'react';
import Movie from './Movie'
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false })
  }
  componentDidMount() {

    this.getMovies();

  }
  componentDidUpdate() {
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container" >

        {isLoading ?
          <div className="loader">
            <span className="loader__text">"Loading..."</span>
          </div>
          :<div className="movies"> {movies.map((movie) =>
            <Movie
              key={movie.id}
              title={movie.title}
              year={movie.year}
              genres={movie.genres}
              summary={movie.summary}
              poster={movie.medium_cover_image} />)}
              </div>
              
        }

              
      </section>
    );
  }
}

export default App;
