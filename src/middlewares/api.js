import { START, SUCCESS, FAIL } from '../constants'

export default () => next => action => {
  const { callAPI, type, ...rest } = action

  if(!callAPI)
    return next(action)

  next({
    ...rest, type: type + START
  })

  fetch(callAPI)
    .then(res => res.json())
    .then(res => next({
      ...rest, type: type + SUCCESS, payload: res
    }))
    .catch(err => next({
      ...rest, type: type + FAIL, payload: err
    }))
}
