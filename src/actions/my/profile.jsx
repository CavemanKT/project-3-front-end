import axios from 'axios'

export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const setCurrentUser = (payload) => ({ type: SET_CURRENT_USER, payload })

export const UNSET_CURRENT_USER = 'UNSET_CURRENT_USER'
export const unsetCurrentUser = () => ({ type: UNSET_CURRENT_USER })

export const getMyProfile = () => (dispatch) => new Promise((resolve, reject) => {
  axios({
    method: 'GET',
    url: 'http://localhost:3000/api/profile/',
    withCredentials: true
  }).then((resp) => {
    dispatch(setCurrentUser(resp.data.currentUser))
    resolve(resp)
  }).catch((err) => {
    dispatch(unsetCurrentUser())
    reject(err)
  })
})
