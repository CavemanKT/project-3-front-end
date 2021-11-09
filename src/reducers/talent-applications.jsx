import produce from 'immer'

import {
  SET_TALENT_APPLICATIONS,
  GET_TALENT_APPLICATIONS,
  UNSET_TALENT_APPLICATIONS,
  ADD_APPLICATION_IN_TALENT,
  REMOVE_APPLICATION_IN_TALENT,
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
      console.log(action.payload.applications)
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
    case ADD_APPLICATION_IN_TALENT: {
      console.log('ADD_APPLICATION_IN_TALENT: ', action.payload)
      return produce(state, (draft) => {
        // draft.applied = true
      })
    }
    case REMOVE_APPLICATION_IN_TALENT: {
      console.log(action.payload)
      return produce(state, (draft) => {
        const index = draft.applications.findIndex((application) => application.id === action.payload)
        if (index !== -1) draft.applications.splice(index, 1)
      })
    }
    case GET_TALENT_APPLICATIONS: {
      return produce(state, (draft) => {
        draft.isGetGameLoading = action.payload.loading
      })
    }
    case DESTROY_TALENT_APPLICATION: {
      console.log(action.payload)

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
