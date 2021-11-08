import axios from 'axios'

import { loading } from '@/actions/loading'

export const SET_DEV_GAMES = 'SET_DEV_GAMES'
export const setDevGames = (payload) => ({ type: SET_DEV_GAMES, payload })
export const GET_DEV_GAMES = 'GET_DEV_GAMES'
export const getGames = () => (dispatch) => {
  dispatch(loading(GET_DEV_GAMES, { loading: true }))
  axios({
    method: 'GET',
    url: 'http://localhost:3000/api/dev/games',
    withCredentials: true
  }).then((resp) => {
    dispatch(setDevGames(resp.data))
  }).finally(() => {
    dispatch(loading(GET_DEV_GAMES, { loading: false }))
  })
}

export const UNSET_DEV_GAMES = 'UNSET_DEV_GAMES'
export const unsetDevGames = () => ({ type: UNSET_DEV_GAMES })
export const resetGames = () => (dispatch) => {
  dispatch(unsetDevGames())
}

export const ADD_GAME_IN_DEV = 'ADD_GAME_IN_DEV'
export const addGameInDev = (payload) => ({ type: ADD_GAME_IN_DEV, payload })
export const CREATE_GAME = 'CREATE_GAME'
export const createGame = (values) => (dispatch) => new Promise((resolve, reject) => {
  console.log(values)
  dispatch(loading(CREATE_GAME, { loading: true }))
  axios({
    method: 'POST',
    url: 'http://localhost:3000/api/dev/games',
    data: values,
    withCredentials: true
  }).then((resp) => {
    dispatch(addGameInDev(resp.data))
    resolve(resp)
  }).catch((err) => {
    reject(err)
  }).finally(() => {
    dispatch(loading(CREATE_GAME, { loading: false }))
  })
})

export const EDIT_GAME_IN_DEV = 'EDIT_GAME_IN_DEV'
export const editGameInDev = (payload) => ({ type: EDIT_GAME_IN_DEV, payload })
export const UPDATE_GAME = 'UPDATE_GAME'
export const updateGame = (values, GameId) => (dispatch) => new Promise((resolve, reject) => {
  dispatch(loading(UPDATE_GAME, { loading: true }))
  axios({
    method: 'PUT',
    url: `http://localhost:3000/api/dev/games/${GameId}`,
    data: values,
    withCredentials: true
  }).then((resp) => {
    dispatch(editGameInDev(resp.data))
    resolve(resp)
  }).catch((err) => {
    reject(err)
  }).finally(() => {
    dispatch(loading(UPDATE_GAME, { loading: false, id: GameId }))
  })
})

export const REMOVE_GAME_IN_DEV = 'REMOVE_GAME_IN_DEV'
export const removeGameInDev = (payload) => ({ type: REMOVE_GAME_IN_DEV, payload })
export const DESTROY_GAME = 'DESTROY_GAME'
export const destroyGame = (GameId) => (dispatch) => new Promise((resolve, reject) => {
  dispatch(loading(DESTROY_GAME, { loading: true }))
  axios({
    method: 'DELETE',
    url: `http://localhost:3000/api/dev/games/${GameId}`,
    withCredentials: true
  }).then((resp) => {
    dispatch(removeGameInDev(GameId))
    resolve(resp)
  }).catch((err) => {
    reject(err)
  }).finally(() => {
    dispatch(loading(DESTROY_GAME, { loading: false, id: GameId }))
  })
})

export const SET_DEV_GAME = 'SET_DEV_GAME'
export const setDevGame = (payload) => ({ type: SET_DEV_GAME, payload })
export const GET_GAME = 'GET_GAME'
export const getGame = (GameId) => (dispatch) => {
  dispatch(loading(GET_GAME, { loading: true }))
  axios({
    method: 'GET',
    url: `http://localhost:3000/api/dev/games/${GameId}`,
    withCredentials: true
  }).then((resp) => {
    dispatch(setDevGame(resp.data))
  }).finally(() => {
    dispatch(loading(GET_GAME, { loading: false }))
  })
}

export const UNSET_DEV_GAME = 'UNSET_DEV_GAME'
export const unsetDevGame = () => ({ type: UNSET_DEV_GAME })
export const resetGame = () => (dispatch) => {
  dispatch(unsetDevGame())
}
