import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'

const RenderForm = ({ errors, touched, isSubmitting }) => (
  <Form>
    <div className="form-group">
      <label htmlFor="username">Username</label>
      <Field
        id="username"
        className={`form-control ${(errors.username && touched.username ? ' is-invalid' : '')}`}
        name="username"
        type="text"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="username" />
    </div>

    <div className="form-group">
      <label htmlFor="firstName">First Name</label>
      <Field
        id="firstName"
        className={`form-control ${(errors.firstName && touched.firstName ? ' is-invalid' : '')}`}
        name="firstName"
        type="text"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="firstName" />
    </div>

    <div className="form-group">
      <label htmlFor="lastName">Last Name</label>
      <Field
        id="lastName"
        className={`form-control ${(errors.lastName && touched.lastName ? ' is-invalid' : '')}`}
        name="lastName"
        type="text"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="lastName" />
    </div>

    <div className="form-group">
      <label htmlFor="resume">Resume</label>
      <Field
        id="resume"
        className={`form-control ${(errors.resume && touched.resume ? ' is-invalid' : '')}`}
        name="resume"
        type="text"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="resume" />
    </div>

    <button className="btn btn-success" type="submit" disabled={isSubmitting}>Submit</button>
  </Form>
)
RenderForm.propTypes = {
  errors: PropTypes.shape().isRequired,
  touched: PropTypes.shape().isRequired,
  isSubmitting: PropTypes.bool.isRequired
}

const profileUpdateSchema = yup.object().shape({
  username: yup.string().required('Required'),
  firstName: yup.string().required('Required'),
  lastName: yup.string().required('Required'),
  resume: yup.string().required('Required')
})

const FormsTalentProfileUpdate = ({ initialValues, onSubmit }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={profileUpdateSchema}
    onSubmit={onSubmit}
    component={RenderForm}
  />
)
FormsTalentProfileUpdate.propTypes = {
  initialValues: PropTypes.shape().isRequired,
  onSubmit: PropTypes.func.isRequired
}
// we can use redux with function component
export default FormsTalentProfileUpdate
