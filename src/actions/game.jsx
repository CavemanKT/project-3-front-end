import axios from 'axios'

import { loading } from '@/actions/loading'

export const SET_GAMES = 'SET_GAMES'
export const setGames = (payload) => ({ type: SET_GAMES, payload })
export const GET_GAMES = 'GET_GAMES'
export const getGames = () => (dispatch) => {
  dispatch(loading(GET_GAMES, { loading: true }))
  axios({
    method: 'GET',
    url: 'http://localhost:3000/api/games'
  }).then((resp) => {
    dispatch(setGames(resp.data))
  }).finally(() => {
    dispatch(loading(GET_GAMES, { loading: false }))
  })
}

export const UNSET_GAMES = 'UNSET_GAMES'
export const unsetDevGames = () => ({ type: UNSET_GAMES })
export const resetGames = () => (dispatch) => {
  dispatch(unsetDevGames())
}

export const SET_GAME = 'SET_GAME'
export const setGame = (payload) => ({ type: SET_GAME, payload })
export const GET_GAME = 'GET_GAME'
export const getGame = (GameId) => (dispatch) => {
  dispatch(loading(GET_GAME, { loading: true }))
  axios({
    method: 'GET',
    url: `http://localhost:3000/api/games/${GameId}`
  }).then((resp) => {
    dispatch(setGame(resp.data))
  }).finally(() => {
    dispatch(loading(GET_GAME, { loading: false }))
  })
}

export const UNSET_GAME = 'UNSET_GAME'
export const unsetGame = () => ({ type: UNSET_GAME })
export const resetGame = () => (dispatch) => {
  dispatch(unsetGame())
}
