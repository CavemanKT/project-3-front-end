import produce from 'immer'

import {
  SET_TALENT_APPLICATION,
  GET_TALENT_APPLICATION,
  UNSET_TALENT_APPLICATION
} from '@/actions/talent/application'

const initialState = {
  application: null,
  isGetGameLoading: false,
  meta: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TALENT_APPLICATION: {
      return produce(state, (draft) => {
        draft.application = action.payload.application
      })
    }
    case UNSET_TALENT_APPLICATION: {
      return produce(state, (draft) => {
        draft.application = null
      })
    }
    case GET_TALENT_APPLICATION: {
      return produce(state, (draft) => {
        draft.isGetGameLoading = action.payload.loading
      })
    }
    default: {
      return state
    }
  }
}
