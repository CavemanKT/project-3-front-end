import axios from 'axios'

import { loading } from '@/actions/loading'

export const SET_PROFILE = 'SET_PROFILE'
export const setProfile = (payload) => ({ type: SET_PROFILE, payload })
export const GET_PROFILE = 'GET_PROFILE'
export const getProfile = () => (dispatch) => {
  dispatch(loading(GET_PROFILE, { loading: true }))
  axios({
    method: 'GET',
    url: 'http://localhost:3000/api/profile',
    withCredentials: true
  }).then((resp) => {
    dispatch(setProfile(resp.data))
  }).finally(() => {
    dispatch(loading(GET_PROFILE, { loading: false }))
  })
}

export const EDIT_PROFILE = 'EDIT_PROFILE'
export const editProfile = (payload) => ({ type: EDIT_PROFILE, payload })
export const UPDATE_PROFILE = 'UPDATE_PROFILE'
export const updateProfile = (values, currentUserId) => (dispatch) => new Promise((resolve, reject) => {
  dispatch(loading(UPDATE_PROFILE, { loading: true, id: currentUserId }))
  axios({
    method: 'PUT',
    url: 'http://localhost:3000/api/profile',
    data: values,
    withCredentials: true
  }).then((resp) => {
    dispatch(editProfile(resp.data))
    resolve(resp)
  }).catch((err) => {
    reject(err)
  }).finally(() => {
    console.log('currentUserId', currentUserId)
    dispatch(loading(UPDATE_PROFILE, { loading: false, id: currentUserId }))
  })
})