import {combineReducers} from 'redux'
import movies from './movies'
import movieInfo from './movie-info'

export default combineReducers({
  movies,
  movieInfo
})
