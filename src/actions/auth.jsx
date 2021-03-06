import axios from 'axios'

import { setMyProfile, unsetMyProfile } from '@/actions/my/profile'

export const authSignup = (values) => () => new Promise((resolve, reject) => {
  axios({
    method: 'POST',
    url: `${process.env.API_URL}/api/auth/signup`,
    data: values
  }).then((resp) => {
    resolve(resp)
  }).catch((err) => {
    reject(err)
  })
})

export const authLogin = (values) => (dispatch) => new Promise((resolve, reject) => {
  axios({
    method: 'POST',
    url: `${process.env.API_URL}/api/auth/login`,
    data: values,
    withCredentials: true
  }).then((resp) => {
    dispatch(setMyProfile(resp.data))
    resolve(resp)
  }).catch((err) => {
    reject(err)
  })
})

export const authLogout = () => (dispatch) => new Promise((resolve, reject) => {
  axios({
    method: 'DELETE',
    url: `${process.env.API_URL}/api/auth/logout`,
    withCredentials: true
  }).then((resp) => {
    dispatch(unsetMyProfile())
    resolve(resp)
  }).catch((err) => {
    reject(err)
  })
})
