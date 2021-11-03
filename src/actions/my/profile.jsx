import axios from 'axios'

export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const setCurrentUser = (payload) => ({ type: SET_CURRENT_USER, payload })

export const UNSET_CURRENT_USER = 'UNSET_CURRENT_USER'
export const unsetCurrentUser = () => ({ type: UNSET_CURRENT_USER })

export const getDevProfile = () => (dispatch) => new Promise((resolve, reject) => {
  console.log('getDevProfile')
  axios({
    method: 'GET',
    url: 'http://localhost:3000/api/profile/dev',
    withCredentials: true
  }).then((resp) => {
    console.log('getDevProfile--resp.data:', resp.data)
    dispatch(setCurrentUser(resp.data))
    resolve(resp)
  }).catch((err) => {
    dispatch(unsetCurrentUser())
    reject(err)
  })
})

export const getTalentProfile = () => (dispatch) => new Promise((resolve, reject) => {
  console.log('getTalentProfile')
  axios({
    method: 'GET',
    url: 'http://localhost:3000/api/profile/talent',
    withCredentials: true
  }).then((resp) => {
    console.log('getTalentProfile--resp.data:', resp.data)
    dispatch(setCurrentUser(resp.data))
    resolve(resp)
  }).catch((err) => {
    dispatch(unsetCurrentUser())
    reject(err)
  })
})
