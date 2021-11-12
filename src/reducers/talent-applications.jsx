import produce from 'immer'

import {
  SET_TALENT_APPLICATIONS,
  GET_TALENT_APPLICATIONS,
  UNSET_TALENT_APPLICATIONS,
  DESTROY_TALENT_APPLICATION
} from '@/actions/talent/application'

const initialState = {
  applications: [],
  applied: false,
  isGetGameLoading: false,
  destroyingIDs: [],
  meta: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TALENT_APPLICATIONS: {
      return produce(state, (draft) => {
        draft.applications = action.payload.applications
      })
    }
    case UNSET_TALENT_APPLICATIONS: {
      return produce(state, (draft) => {
        draft.meta = null
        draft.applications = []
      })
    }
    case GET_TALENT_APPLICATIONS: {
      return produce(state, (draft) => {
        draft.isGetGameLoading = action.payload.loading
      })
    }
    case DESTROY_TALENT_APPLICATION: {
      return produce(state, (draft) => {
        if (action.payload.loading) {
          draft.destroyingIDs.push(action.payload.id)
        } else {
          const index = draft.destroyingIDs.indexOf(action.payload.id)
          if (index !== -1) draft.destroyingIDs.splice(index, 1)
        }
      })
    }
    default: {
      return state
    }
  }
}
