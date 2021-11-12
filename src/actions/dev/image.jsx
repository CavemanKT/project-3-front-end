import axios from 'axios'

import { loading } from '@/actions/loading'
import getFormData from '@/services/getFormData'

export const CREATE_IMAGE = 'CREATE_IMAGE'
export const createImage = (values, GameId) => (dispatch) => new Promise((resolve, reject) => {
  dispatch(loading(CREATE_IMAGE, { loading: true }))
  axios({
    method: 'POST',
    url: `${process.env.API_URL}/api/dev/games/${GameId}/images`,
    data: getFormData(values, 'image'),
    withCredentials: true
  }).then((resp) => {
    resolve(resp)
  }).catch((err) => {
    reject(err)
  }).finally(() => {
    dispatch(loading(CREATE_IMAGE, { loading: false }))
  })
})

export const UPDATE_IMAGE = 'UPDATE_IMAGE'
export const updateImage = (values, GameId) => (dispatch) => new Promise((resolve, reject) => {
  dispatch(loading(UPDATE_IMAGE, { loading: true }))
  axios({
    method: 'PUT',
    url: `${process.env.API_URL}/api/dev/games/${GameId}/images`,
    data: getFormData(values, 'image'),
    withCredentials: true
  }).then((resp) => {
    resolve(resp)
  }).catch((err) => {
    reject(err)
  }).finally(() => {
    dispatch(loading(UPDATE_IMAGE, { loading: false }))
  })
})
