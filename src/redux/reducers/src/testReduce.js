// reducer: 返回新状态
import {FETCH_TEST} from '@/redux/actions/types'

const defaultState = {
  test: {
    items: []
  }
}

export default function (state = defaultState, action) {
  const { type, payload } = action
  switch (type) {
    case FETCH_TEST:
      return {
        ...state,
        items: payload
      }
    default:
      return state
  }
}
