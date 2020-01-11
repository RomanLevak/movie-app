import './MoviesList.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadMovies } from '../AC'
import MoviePoster from './MoviePoster'

class MoviesList extends Component {
  componentDidMount() {
    const { loadMovies, type, id } = this.props

    loadMovies(type, id)
  }

  render() {
    const { loading, error } = this.props

    if(error)
      return <span className="error">{error}</span>
    if(loading)
      return <div className="loading"></div>

    return (
      <div className="movies-list">
        <h2 className="movies-list__title">
          {`${this.props.type} movies`}
        </h2>
        <ul className="movies-list__body">
          {this.getItems()}
        </ul>
      </div>
      )
    }

    getItems = () =>
    this.props.entities.map(movie =>
      <li className="movies-list__item" key={movie.id}>
        <MoviePoster
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      </li>
      )
}

export default connect(
  state => ({ ...state.movies }),
  { loadMovies }
)(MoviesList)
