import produce from 'immer'

import {
  SET_MY_PROFILE,
  UNSET_MY_PROFILE
} from '@/actions/my/profile'

const initialState = {
  currentUser: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MY_PROFILE: {
      return produce(state, (draft) => {
        draft.currentUser = action.payload
      })
    }
    case UNSET_MY_PROFILE: {
      return produce(state, (draft) => {
        draft.currentUser = null
      })
    }
    default: {
      return state
    }
  }
}
