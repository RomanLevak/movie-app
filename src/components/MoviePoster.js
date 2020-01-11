import './MoviePoster.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default function MoviePoster(props) {
  const { title, poster_path, id } = props

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
