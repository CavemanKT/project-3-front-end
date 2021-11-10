import axios from 'axios'

import { loading } from '@/actions/loading'

export const SET_TALENT_APPLICATIONS = 'SET_TALENT_APPLICATIONS'
export const setTalentApplications = (payload) => ({ type: SET_TALENT_APPLICATIONS, payload })
export const GET_TALENT_APPLICATIONS = 'GET_TALENT_APPLICATIONS'
export const getTalentApplications = () => (dispatch) => {
  dispatch(loading(GET_TALENT_APPLICATIONS, { loading: true }))
  axios({
    method: 'GET',
    url: 'http://localhost:3000/api/talent/applications',
    withCredentials: true
  }).then((resp) => {
    dispatch(setTalentApplications(resp.data))
  }).finally(() => {
    dispatch(loading(GET_TALENT_APPLICATIONS, { loading: false }))
  })
}

export const UNSET_TALENT_APPLICATIONS = 'UNSET_TALENT_APPLICATIONS'
export const unsetTalentApplications = () => ({ type: UNSET_TALENT_APPLICATIONS })
export const resetTalentApplications = () => (dispatch) => {
  dispatch(unsetTalentApplications())
}

// ! GET TALENT APPLICATION
export const SET_TALENT_APPLICATION = 'SET_TALENT_APPLICATION'
export const setTalentApplication = (payload) => ({ type: SET_TALENT_APPLICATION, payload })
export const GET_TALENT_APPLICATION = 'GET_TALENT_APPLICATION'
export const getTalentApplication = (GameId) => (dispatch) => {
  dispatch(loading(GET_TALENT_APPLICATION, { loading: true }))
  axios({
    method: 'GET',
    url: `http://localhost:3000/api/talent/applications/${GameId}`,
    withCredentials: true
  }).then((resp) => {
    dispatch(setTalentApplication(resp.data))
  }).finally(() => {
    dispatch(loading(GET_TALENT_APPLICATION, { loading: false }))
  })
}

export const UNSET_TALENT_APPLICATION = 'UNSET_TALENT_APPLICATION'
export const unsetTalentApplication = () => ({ type: UNSET_TALENT_APPLICATION })
export const resetTalentApplication = () => (dispatch) => {
  dispatch(unsetTalentApplication())
}

// ! POST TALENT APPLICATION
export const CREATE_TALENT_APPLICATION = 'CREATE_TALENT_APPLICATION'
export const createTalentApplication = (GameId) => (dispatch) => new Promise((resolve, reject) => {
  dispatch(loading(CREATE_TALENT_APPLICATION, { loading: true, GameId }))
  axios({
    method: 'POST',
    url: `http://localhost:3000/api/talent/games/${GameId}/applications`,
    withCredentials: true
  }).then((resp) => {
    dispatch(setTalentApplication(resp.data))
    resolve(resp)
  }).catch((err) => {
    reject(err)
  }).finally(() => {
    dispatch(loading(CREATE_TALENT_APPLICATION, { loading: false, GameId }))
  })
})

// ! DELETE TALENT APPLICATION
export const DESTROY_TALENT_APPLICATION = 'DESTROY_TALENT_APPLICATION'
export const destroyTalentApplication = (GameId) => (dispatch) => new Promise((resolve, reject) => {
  dispatch(loading(DESTROY_TALENT_APPLICATION, { loading: true }))
  axios({
    method: 'DELETE',
    url: `http://localhost:3000/api/talent/games/${GameId}/applications`,
    withCredentials: true
  }).then((resp) => {
    dispatch(unsetTalentApplication())
    resolve(resp)
  }).catch((err) => {
    reject(err)
  }).finally(() => {
    dispatch(loading(DESTROY_TALENT_APPLICATION, { loading: false }))
  })
})

