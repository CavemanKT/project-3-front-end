import axios from 'axios'

import { loading } from '@/actions/loading'

export const SET_MY_PROFILE = 'SET_MY_PROFILE'
export const setMyProfile = (payload) => ({ type: SET_MY_PROFILE, payload })
export const UNSET_MY_PROFILE = 'UNSET_MY_PROFILE'
export const unsetMyProfile = (payload) => ({ type: UNSET_MY_PROFILE, payload })
export const GET_MY_PROFILE = 'GET_MY_PROFILE'
export const getMyProfile = () => (dispatch) => new Promise((resolve, reject) => {
  dispatch(loading(GET_MY_PROFILE, { loading: true }))
  axios({
    method: 'GET',
    url: `${process.env.API_URL}/api/profile`,
    withCredentials: true
  }).then((resp) => {
    resolve(resp)
    dispatch(setMyProfile(resp.data.currentUser))
  }).catch((err) => {
    reject(err)
  }).finally(() => {
    dispatch(loading(GET_MY_PROFILE, { loading: false }))
  })
})

export const UPDATE_PROFILE = 'UPDATE_PROFILE'
export const updateProfile = (values, currentUserId) => (dispatch) => new Promise((resolve, reject) => {
  dispatch(loading(UPDATE_PROFILE, { loading: true, id: currentUserId }))
  axios({
    method: 'PUT',
    url: `${process.env.API_URL}/api/profile`,
    data: values,
    withCredentials: true
  }).then((resp) => {
    resolve(resp)
    dispatch(setMyProfile(resp.data.currentUser))
  }).catch((err) => {
    reject(err)
  }).finally(() => {
    dispatch(loading(UPDATE_PROFILE, { loading: false, id: currentUserId }))
  })
})
