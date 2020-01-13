import './MoviePoster.css'
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function MoviePoster(props) {
  const { id, title, poster_path } = props

  return (
    <div className="movie-poster">
      <div className="movie-poster__img-box">
        <img className="movie-poster__img"
          src={`http://image.tmdb.org/t/p/w200/${poster_path}`}
          alt={title}
        >
        </img>
      </div>
      <h3 className="movie-poster__title-box">
        <Link className="movie-poster__title"
          to={`/${id}`}
        >
          {title}
        </Link>
      </h3>
    </div>
  )
}

MoviePoster.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired
}
