import axios from 'axios'

import { loading } from '@/actions/loading'

export const SET_PROFILE = 'SET_PROFILE'
export const setProfile = (payload) => ({ type: SET_PROFILE, payload })
export const GET_PROFILE = 'GET_PROFILE'
export const getProfile = () => (dispatch) => {
  dispatch(loading(GET_PROFILE, { loading: true }))
  axios({
    method: 'GET',
    url: 'http://localhost:3000/api/profile/:currentUserId',
    withCredentials: true
  }).then((resp) => {
    dispatch(setProfile(resp.data))
    console.log(resp.data)
  }).finally(() => {
    dispatch(loading(GET_PROFILE, { loading: false }))
  })
}

export const EDIT_PROFILE = 'EDIT_PROFILE'
export const editProfile = (payload) => ({ type: EDIT_PROFILE, payload })
export const UPDATE_PROFILE = 'UPDATE_PROFILE'
export const updateProfile = (values, currentUserId) => (dispatch) => new Promise((resolve, reject) => {
  console.log('hi')
  dispatch(loading(UPDATE_PROFILE, { loading: true }))
  axios({
    method: 'PUT',
    url: `http://localhost:3000/api/profile/${currentUserId}`,
    data: values
  }).then((resp) => {
    console.log('problem is here')
    dispatch(editProfile(resp.data))
    resolve(resp)
  }).catch((err) => {
    reject(err)
  }).finally(() => {
    dispatch(loading(UPDATE_PROFILE, { loading: false, id: currentUserId }))
  })
})
