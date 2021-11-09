import axios from 'axios'

import { loading } from '@/actions/loading'

export const SET_TALENT_PROFILE = 'SET_TALENT_PROFILE'
export const setTalentProfile = (payload) => ({ type: SET_TALENT_PROFILE, payload })
export const GET_TALENT_PROFILE = 'GET_TALENT_PROFILE'
export const getTalentProfile = () => (dispatch) => {
  dispatch(loading(GET_TALENT_PROFILE, { loading: true }))
  axios({
    method: 'GET',
    url: 'http://localhost:3000/api/profile',
    withCredentials: true
  }).then((resp) => {
    dispatch(setTalentProfile(resp.data))
    console.log(resp.data)
  }).finally(() => {
    dispatch(loading(GET_TALENT_PROFILE, { loading: false }))
  })
}

export const UPDATE_TALENT_PROFILE = 'UPDATE_TALENT_PROFILE'
export const updateTalentProfile = (values, currentUserId) => (dispatch) => new Promise((resolve, reject) => {
  dispatch(loading(UPDATE_TALENT_PROFILE, { loading: true, id: currentUserId }))
  console.log('>>>>>>>>>>>currentUserId', currentUserId)
  console.log(values)
  axios({
    method: 'PUT',
    url: 'http://localhost:3000/api/profile',
    data: values,
    withCredentials: true
  }).then((resp) => {
    console.log(resp.data)
    resolve(resp)
  }).catch((err) => {
    reject(err)
  }).finally(() => {
    console.log('currentUserId', currentUserId)
    dispatch(loading(UPDATE_TALENT_PROFILE, { loading: false, id: currentUserId }))
  })
})
