import axios from 'axios'

import { loading } from '@/actions/loading'

export const SET_APPLICATIONS_APPROVAL = 'SET_APPLICATIONS_APPROVAL'
export const setApplicationsApproval = (payload) => ({
  type: SET_APPLICATIONS_APPROVAL, payload
})
export const GET_APPLICATIONS_APPROVAL = 'GET_APPLICATIONS_APPROVAL'
export const getApplicationsApproval = (GameId) => (dispatch) => {
  dispatch(loading(GET_APPLICATIONS_APPROVAL, { loading: true }))
  axios({
    method: 'GET',
    url: `${process.env.API_URL}/api/dev/approve/${GameId}`,
    withCredentials: true
  }).then((resp) => {
    console.log(resp.data)
    dispatch(setApplicationsApproval(resp.data))
  }).finally(() => {
    dispatch(loading(GET_APPLICATIONS_APPROVAL, { loading: false }))
  })
}

export const UNSET_APPLICATION_APPROVAL = 'UNSET_APPLICATION_APPROVAL'
export const unsetApplicationApproval = () => ({ type: UNSET_APPLICATION_APPROVAL })
export const resetApplicationApproval = () => (dispatch) => {
  dispatch(unsetApplicationApproval())
}

export const CHANGE_BTN_TO_APPROVED = 'CHANGE_BTN_TO_APPROVED'
export const changeBtnToApproved = (payload) => ({
  type: CHANGE_BTN_TO_APPROVED, payload
})
export const UPDATE_APPROVED_TO_TRUE_IN_DB = 'UPDATE_APPROVED_TO_TRUE_IN_DB'
export const updateApprovedToTrueInDB = (GameId, TalentId) => (dispatch) => new Promise((resolve, reject) => {
  dispatch(loading(UPDATE_APPROVED_TO_TRUE_IN_DB, { loading: true }))
  axios({
    method: 'PUT',
    url: `${process.env.API_URL}/api/dev/approve/${GameId}/${TalentId}`,
    withCredentials: true
  }).then((resp) => {
    dispatch(changeBtnToApproved(resp.data))
    resolve(resp)
  }).catch((err) => {
    reject(err)
  }).finally(() => {
    dispatch(loading(UPDATE_APPROVED_TO_TRUE_IN_DB, { loading: false }))
  })
})

export const CHANGE_BTN_TO_APPROVE = 'CHANGE_BTN_TO_APPROVE'
export const changeBtnToApprove = (payload) => ({
  type: CHANGE_BTN_TO_APPROVE, payload
})
export const UPDATE_APPROVED_TO_FALSE_IN_DB = 'UPDATE_APPROVED_TO_TRUE_IN_DB'
export const updateApprovedToFalseInDB = (GameId, TalentId) => (dispatch) => new Promise((resolve, reject) => {
  dispatch(loading(UPDATE_APPROVED_TO_FALSE_IN_DB), { loading: true })
  axios({
    method: 'PUT',
    url: `${process.env.API_URL}/api/dev/approved/${GameId}/${TalentId}`,
    withCredentials: true
  }).then((resp) => {
    console.log(resp.data)
    dispatch(changeBtnToApprove(resp.data))
    resolve(resp)
  }).catch((err) => {
    reject(err)
  }).finally(() => {
    dispatch(loading(UPDATE_APPROVED_TO_FALSE_IN_DB, { loading: false }))
  })
})
