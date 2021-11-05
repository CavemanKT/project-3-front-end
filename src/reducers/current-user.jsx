import produce from 'immer'

import {
  SET_CURRENT_USER,
  UNSET_CURRENT_USER
} from '@/actions/my/profile'

const initialState = {
  currentUser: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER: {
      console.log('action.payload.type:', action.payload) // results: Developer
      return produce(state, (draft) => {
        draft.currentUser = action.payload
        console.log('reducer--currentUser', draft.currentUser)
      })
    }
    case UNSET_CURRENT_USER: {
      return produce(state, (draft) => {
        draft.currentUser = null
      })
    }
    default: {
      return state
    }
  }
}
