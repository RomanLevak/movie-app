import {
  LOAD_MOVIES,
  START, SUCCESS, FAIL
} from '../constants'

const defaultState = {
  loading: false,
  error: '',
  entities: []
}

export default (moviesState = defaultState, action) => {
  const { type, payload } = action

  switch(type) {
    case LOAD_MOVIES + START:
      return {
        loading: true,
        error: '',
        entities: []
      }

    case LOAD_MOVIES + SUCCESS:
      return {
        loading: false,
        error: '',
        entities: payload.results
      }

    case LOAD_MOVIES + FAIL:
      return {
        loading: false,
        error: payload.message,
        entities: []
      }

    default:
      return moviesState
  }
}
