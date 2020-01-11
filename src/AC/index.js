import {
    LOAD_MOVIES,
    LOAD_MOVIE_INFO,
    API_KEY
} from '../constants'

export function loadMovies(type = 'popular', id) {
    const callAPI = {
        'popular': `/popular?api_key=${API_KEY}`,
        'similar': `/${id}/similar?api_key=${API_KEY}`
    }[type]

    return {
        type: LOAD_MOVIES,
        callAPI
    }
}

export function loadMovieInfo(id) {
    return {
        type: LOAD_MOVIE_INFO,
        callAPI: `/${id}?api_key=${API_KEY}`
    }
}
