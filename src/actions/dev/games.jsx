import axios from 'axios'

import { loading } from '@/actions/loading'

export const SET_DEV_GAMES = 'SET_DEV_GAMES'
export const setDevGames = (payload) => ({ type: SET_DEV_GAMES, payload })
export const GET_DEV_GAMES = 'GET_DEV_GAMES'
export const getGames = () => (dispatch) => {
  dispatch(loading(GET_DEV_GAMES, { loading: true }))
  axios({
    method: 'GET',
    url: `${process.env.API_URL}/api/dev/games`,
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

export const SET_DEV_GAME = 'SET_DEV_GAME'
export const setDevGame = (payload) => ({ type: SET_DEV_GAME, payload })
export const GET_DEV_GAME = 'GET_DEV_GAME'
export const getDevGame = (GameId) => (dispatch) => {
  dispatch(loading(GET_DEV_GAME, { loading: true }))
  axios({
    method: 'GET',
    url: `${process.env.API_URL}/api/dev/games/${GameId}`,
    withCredentials: true
  }).then((resp) => {
    dispatch(setDevGame(resp.data))
  }).finally(() => {
    dispatch(loading(GET_DEV_GAME, { loading: false }))
  })
}

export const UNSET_DEV_GAME = 'UNSET_DEV_GAME'
export const unsetDevGame = () => ({ type: UNSET_DEV_GAME })
export const resetGame = () => (dispatch) => {
  dispatch(unsetDevGame())
}

export const CREATE_GAME = 'CREATE_GAME'
export const createGame = (values) => (dispatch) => new Promise((resolve, reject) => {
  dispatch(loading(CREATE_GAME, { loading: true }))
  axios({
    method: 'POST',
    url: `${process.env.API_URL}/api/dev/games`,
    data: values,
    withCredentials: true
  }).then((resp) => {
    resolve(resp)
  }).catch((err) => {
    reject(err)
  }).finally(() => {
    dispatch(loading(CREATE_GAME, { loading: false }))
  })
})

export const UPDATE_GAME = 'UPDATE_GAME'
export const updateGame = (values, GameId) => (dispatch) => new Promise((resolve, reject) => {
  dispatch(loading(UPDATE_GAME, { loading: true }))
  axios({
    method: 'PUT',
    url: `${process.env.API_URL}/api/dev/games/${GameId}`,
    data: values,
    withCredentials: true
  }).then((resp) => {
    resolve(resp)
  }).catch((err) => {
    reject(err)
  }).finally(() => {
    dispatch(loading(UPDATE_GAME, { loading: false, id: GameId }))
  })
})

export const DESTROY_GAME = 'DESTROY_GAME'
export const destroyGame = (GameId) => (dispatch) => new Promise((resolve, reject) => {
  dispatch(loading(DESTROY_GAME, { loading: true }))
  axios({
    method: 'DELETE',
    url: `${process.env.API_URL}/api/dev/games/${GameId}`,
    withCredentials: true
  }).then((resp) => {
    resolve(resp)
  }).catch((err) => {
    reject(err)
  }).finally(() => {
    dispatch(loading(DESTROY_GAME, { loading: false, id: GameId }))
  })
})

export const SET_DEV_GAME_APPLICATIONS = 'SET_DEV_GAME_APPLICATIONS'
export const setDevGameApplications = (payload) => ({ type: SET_DEV_GAME_APPLICATIONS, payload })
export const GET_DEV_GAME_APPLICATIONS = 'GET_DEV_GAME_APPLICATIONS'
export const getDevGameApplications = (GameId) => (dispatch) => {
  dispatch(loading(GET_DEV_GAME_APPLICATIONS, { loading: true }))
  axios({
    method: 'GET',
    url: `${process.env.API_URL}/api/dev/games/${GameId}/applications`,
    withCredentials: true
  }).then((resp) => {
    dispatch(setDevGameApplications(resp.data))
  }).finally(() => {
    dispatch(loading(GET_DEV_GAME_APPLICATIONS, { loading: false }))
  })
}

export const UNSET_DEV_GAME_APPLICATIONS = 'UNSET_DEV_GAME_APPLICATIONS'
export const unsetDevGameApplications = () => ({ type: UNSET_DEV_GAME_APPLICATIONS })
export const resetDevGameApplications = () => (dispatch) => {
  dispatch(unsetDevGameApplications())
}
