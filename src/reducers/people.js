import * as types from '../actions/constants'

const initialState = {
  loading: false,
  count: null,
  next: null,
  previous: null,
  range: null,
  results: [],
  error: null
}

// const sortByName = (results) => {
//   let sorted = [...results]
//   sorted.sort((a, b) => {
//     return a.name.localeCompare(b.name)
//   })
//   return sorted
// }

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case types.ALL_PEOPLE_REQUEST:
      return { ...state, loading: true }
    case types.ALL_PEOPLE_SUCCESS:
      const { count, next, previous, results } = payload

      const newNext = next && parseInt(next.split("=").slice(-1)[0])
      const newPrevious = previous && parseInt(previous.split("=").slice(-1)[0])
      const take = 10
      const curPage = newNext ? newNext - 1 : newPrevious + 1
      const skip = (curPage - 1) * take
      const range = {
        first: skip + 1,
        last: (skip + take > count) ? count : skip + take
      }


      return { 
        ...state,
        loading: false,
        count,
        next: newNext && `?page=${newNext}`,
        previous: newPrevious && `?page=${newPrevious}`,
        range,
        results,
        curPage
      }
    case types.ALL_PEOPLE_FAILURE:
      return {
        ...state,
        error: payload
      }
    default:
      return state
  }
}