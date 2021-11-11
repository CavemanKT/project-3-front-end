import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'

const RenderForm = ({ errors, touched, isSubmitting }) => (
  <Form>
    <div className="form-group">
      <label htmlFor="email">Email</label>
      <Field
        id="email"
        className={`form-control ${(errors.email && touched.email ? ' is-invalid' : '')}`}
        name="email"
        type="text"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="email" />
    </div>

    <div className="form-group">
      <label htmlFor="password">Password</label>
      <Field
        id="password"
        className={`form-control ${(errors.password && touched.password ? ' is-invalid' : '')}`}
        name="password"
        type="password"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="password" />
    </div>

    <div className="form-group">
      <label htmlFor="passwordConfirmation">Confirmation</label>
      <Field
        id="passwordConfirmation"
        className={`form-control ${(errors.passwordConfirmation && touched.passwordConfirmation ? ' is-invalid' : '')}`}
        name="passwordConfirmation"
        type="password"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="passwordConfirmation" />
    </div>

    <div id="radio-role-group" className="d-flex">Role</div>
    {/* need radio validation */}
    <div className="form-group radio-group mt-4 d-flex justify-content-around" role="group" aira-labelledby="radio-role-group">
      <label htmlFor="type" className="radio-label">
        <Field
          className={`form-control ${(errors.type && touched.type ? ' is-invalid' : '')}`}
          name="type"
          type="radio"
          value="Developer"
        />
        Developer
      </label>

      <label htmlFor="type" className="radio-label">
        <Field
          className={`form-control ${(errors.type && touched.type ? ' is-invalid' : '')}`}
          name="type"
          type="radio"
          value="Marketer"
        />
        Marketer
      </label>
      <ErrorMessage component="div" className="invalid-feedback" name="type" />
    </div>

    <button className="btn btn-success" type="submit" disabled={isSubmitting}>Submit</button>
  </Form>
)
RenderForm.propTypes = {
  errors: PropTypes.shape().isRequired,
  touched: PropTypes.shape().isRequired,
  isSubmitting: PropTypes.bool.isRequired
}

const authSignupSchema = yup.object().shape({
  email: yup.string().email().required('Required'),
  password: yup.string().min(6).required('Required'),
  passwordConfirmation: yup.string().when('password', {
    is: (val) => (!!(val && val.length > 0)),
    then: yup.string().oneOf(
      [yup.ref('password')],
      'Both Password need to be the same'
    )
  }),
  type: yup.string().required('A radio option is required')
})

const FormsAuthSignup = ({ onSubmit }) => (
  <Formik
    initialValues={{
      email: '',
      password: '',
      passwordConfirmation: ''
    }}
    validationSchema={authSignupSchema}
    onSubmit={onSubmit}
    component={RenderForm}
  />
)
FormsAuthSignup.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default FormsAuthSignup
