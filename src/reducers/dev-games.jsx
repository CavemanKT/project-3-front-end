import produce from 'immer'

import {
  SET_DEV_GAMES,
  UNSET_DEV_GAMES,
  ADD_GAME_IN_DEV,
  EDIT_GAME_IN_DEV,
  REMOVE_GAME_IN_DEV,
  GET_DEV_GAMES,
  DESTROY_GAME
} from '@/actions/dev/game'

const initialState = {
  devGames: [],
  isGetGameLoading: false,
  destroyingIDs: [],
  meta: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DEV_GAMES: {
      return produce(state, (draft) => {
        draft.devGames = action.payload.games
      })
    }
    case UNSET_DEV_GAMES: {
      return produce(state, (draft) => {
        draft.meta = null
        draft.devGames = []
      })
    }
    case ADD_GAME_IN_DEV: {
      return produce(state, (draft) => {
        draft.devGames.push(action.payload.game)
      })
    }
    case EDIT_GAME_IN_DEV: {
      return produce(state, (draft) => {
        const index = draft.devGames.findIndex((game) => game.id === action.payload.game.id)
        if (index !== -1) draft.devGames[index] = action.payload.game
      })
    }
    case REMOVE_GAME_IN_DEV: {
      console.log(action.payload)
      return produce(state, (draft) => {
        const index = draft.devGames.findIndex((game) => game.id === action.payload)
        if (index !== -1) draft.devGames.splice(index, 1)
      })
    }
    case GET_DEV_GAMES: {
      return produce(state, (draft) => {
        draft.isGetGameLoading = action.payload.loading
      })
    }
    case DESTROY_GAME: {
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
