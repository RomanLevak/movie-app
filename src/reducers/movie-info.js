import {
  LOAD_MOVIE_INFO,
  START, SUCCESS, FAIL
} from '../constants'

const defaultState = {
  loading: false,
  error: '',
  entity: {}
}

export default (movieInfo = defaultState, action) => {
  const {type, payload} = action

  switch(type) {
    case LOAD_MOVIE_INFO + START:
      return {
        loading: true,
        error: '',
        entity: {}
      }

    case LOAD_MOVIE_INFO + SUCCESS:
      return {
        loading: false,
        error: '',
        entity: payload
      }

    case LOAD_MOVIE_INFO + FAIL:
      return {
        loading: false,
        error: payload,
        entity: {}
      }

    default:
      return movieInfo
  }
}
