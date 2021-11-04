import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'

const RenderForm = ({ errors, touched, isSubmitting }) => (
  <Form>
    <div className="form-group">
      <label htmlFor="username">username</label>
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
  lastName: yup.string().required('Required')
})

const FormsProfileUpdate = ({ onSubmit }) => (
  <Formik
    initialValues={{
      username: '',
      firstName: '',
      lastName: ''
    }}
    validationSchema={profileUpdateSchema}
    onSubmit={onSubmit}
    component={RenderForm}
  />
)
FormsProfileUpdate.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default FormsProfileUpdate
