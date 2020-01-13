import './MovieInfo.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadMovieInfo } from '../AC'
import MovieList from './MoviesList'

class MovieInfo extends Component {
  componentDidMount() {
    const { loadMovieInfo, id } = this.props

    loadMovieInfo(id)
  }

  render() {
    const { loading, error } = this.props

    if(error)
      return <span className="error">{error}</span>
    if(loading)
      return <div className="loading"></div>

    const { title, overview, poster_path, id } = this.props.entity

    if(!id)
      return null

    return (
      <div className="movie-info">
        <h2 className="movie-info__title">
          {title}
        </h2>
        <div className="movie-info__box">
          <div className="movie-info__img-box">
            <img className="movie-info__img"
              alt={title}
              src={`http://image.tmdb.org/t/p/w200/${poster_path}`}
            />
          </div>
          <div className="movie-info__table-box">
            {this.getInfoTable()}
          </div>
        </div>
        <p className="movie-info__overview">
          {overview}
        </p>
        <MovieList type="similar" id={id} />
      </div>
    )
  }

  getInfoTable = () => {
    const {
      vote_average, vote_count, homepage,
      release_date, adult,
      original_language, genres,
      production_countries,
      tagline, runtime, budget
    } = this.props.entity

    return (
      <table className="movie-info__table">
        <tbody>
          <tr>
            <td>Tagline</td>
            <td>{tagline}</td>
          </tr>
          <tr>
            <td>Rating</td>
            <td>TMDB {vote_average}</td>
          </tr>
          <tr>
            <td>vote count</td>
            <td>{vote_count}</td>
          </tr>
          { homepage &&
              <tr>
                <td>homepage</td>
                <td>
                  <a className="movie-info__link"
                    rel="noopener noreferrer"
                    target="_blank"
                    href={homepage}
                  >
                    {homepage}
                  </a>
                </td>
              </tr>
          }
          <tr>
            <td>Release date</td>
            <td>{release_date}</td>
          </tr>
          <tr>
            <td>Original language</td>
            <td>{original_language}</td>
          </tr>
          <tr>
            <td>Counries</td>
            <td>
              {production_countries.map(c => c.name).join(', ')}
            </td>
          </tr>
          <tr>
            <td>Genres</td>
            <td>
              {genres.map(g => g.name).join(', ')}
            </td>
          </tr>
          <tr>
            <td>Adult</td>
            <td>{adult ? 'yes' : 'no'}</td>
          </tr>
          <tr>
            <td>Runtime</td>
            <td>{`${runtime}m`}</td>
          </tr>
          <tr>
            <td>Budget</td>
            <td>{`${budget} $`}</td>
          </tr>
        </tbody>
      </table>
    )
  }

  static propTypes = {
    // from connect
    id: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    entity: PropTypes.object.isRequired,
    loadMovieInfo: PropTypes.func.isRequired
  }
}

export default connect(
  state => state.movieInfo,
  { loadMovieInfo }
)(MovieInfo)
