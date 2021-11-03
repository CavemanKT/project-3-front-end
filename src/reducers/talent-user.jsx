import produce from 'immer'

import {
  SET_CURRENT_USER,
  UNSET_CURRENT_USER
} from '@/actions/my/profile'

const initialState = {
  talentUser: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER: {
      console.log('action.payload.type:', action.payload) // results: Developer
      return produce(state, (draft) => {
        draft.talentUser = action.payload.talentUser
        console.log('reducer-- talentUser: ', draft.talentUser)
      })
    }
    case UNSET_CURRENT_USER: {
      return produce(state, (draft) => {
        draft.talentUser = null
      })
    }
    default: {
      return state
    }
  }
}
