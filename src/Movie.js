import React from 'react';
import './Movie.css';
import PropTypes from 'prop-types';

function Movie({ title, year, genres, summary, poster }) {
  return (
    <div className="movie">

      <img className="movie__poster" src={poster} alt={title} title={title} />

      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genre, index)=>
          <li className="genres__genre" key={index}>
           {genre} 
          </li>
          )}
        </ul>
        <p className="movie__summary">{summary.slice(0, 140)}...</p>
      </div>

    </div>
  );
}

Movie.propTypes = {

  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default Movie;
