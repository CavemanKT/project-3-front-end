import produce from 'immer'

import {
  SET_CURRENT_USER,
  UNSET_CURRENT_USER
} from '@/actions/my/profile'

const initialState = {
  devUser: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER: {
      console.log('action.payload.type:', action.payload) // results: Developer
      return produce(state, (draft) => {
        draft.devUser = action.payload.devUser
        console.log('reducer--devUser', draft.devUser)
      })
    }
    case UNSET_CURRENT_USER: {
      return produce(state, (draft) => {
        draft.devUser = null
      })
    }
    default: {
      return state
    }
  }
}
