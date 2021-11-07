import axios from 'axios'

import { loading } from '@/actions/loading'

export const ADD_IMAGE_IN_DEV_GAME = 'ADD_IMAGE_IN_DEV_GAME'
export const addImageInDevGame = (payload) => ({ type: ADD_IMAGE_IN_DEV_GAME, payload })
export const CREATE_IMAGE = 'CREATE_IMAGE'
export const createImage = (values, GameId) => (dispatch) => new Promise((resolve, reject) => {
  dispatch(loading(CREATE_IMAGE, { loading: true }))
  axios({
    method: 'POST',
    url: `http://localhost:3000/api/dev/games/${GameId}/images`,
    data: values,
    withCredentials: true
  }).then((resp) => {
    dispatch(addImageInDevGame(resp.data))
    resolve(resp)
  }).catch((err) => {
    reject(err)
  }).finally(() => {
    dispatch(loading(CREATE_IMAGE, { loading: false }))
  })
})

export const EDIT_IMAGE_IN_DEV_GAME = 'EDIT_IMAGE_IN_DEV_GAME'
export const editImageInDevGame = (payload) => ({ type: EDIT_IMAGE_IN_DEV_GAME, payload })
export const UPDATE_IMAGE = 'UPDATE_IMAGE'
export const updateImage = (values, GameId, ImageId) => (dispatch) => new Promise((resolve, reject) => {
  dispatch(loading(UPDATE_IMAGE, { loading: true, id: ImageId }))
  axios({
    method: 'PUT',
    url: `http://localhost:300/api/dev/games/${GameId}/images/${ImageId}`,
    data: values,
    withCredentials: true
  }).then((resp) => {
    dispatch(editImageInDevGame(resp.data))
    resolve(resp)
  }).catch((err) => {
    reject(err)
  }).finally(() => {
    dispatch(loading(UPDATE_IMAGE, { loading: false, id: ImageId }))
  })
})

export const REMOVE_IMAGE_IN_DEV_GAME = 'REMOVE_IMAGE_IN_DEV_GAME'
export const removeImageInDevGame = (payload) => ({ type: REMOVE_IMAGE_IN_DEV_GAME, payload })
export const DESTROY_IMAGE = 'DESTROY_IMAGE'
export const destroyImage = (GameId, ImageId) => (dispatch) => new Promise((resolve, reject) => {
  dispatch(loading(DESTROY_IMAGE, { loading: true, id: ImageId }))
  axios({
    method: 'DELETE',
    url: `http://localhost:3000/api/dev/games/${GameId}/images/${ImageId}`,
    withCredentials: true
  }).then((resp) => {
    dispatch(removeImageInDevGame(ImageId))
    resolve(resp)
  }).catch((err) => {
    reject(err)
  }).finally(() => {
    dispatch(loading(DESTROY_IMAGE, { loading: false, id: ImageId }))
  })
})
