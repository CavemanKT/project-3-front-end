import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'

const RenderForm = ({ errors, touched, isSubmitting }) => (
  <Form>
    <div className="form-group">
      <label htmlFor="name">Name</label>
      <Field
        id="name"
        className={`form-control ${(errors.name && touched.name ? ' is-invalid' : '')}`}
        name="name"
        type="text"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="name" />
    </div>

    <div className="form-group">
      <label htmlFor="description">Description</label>
      <Field
        id="description"
        className={`form-control ${(errors.description && touched.description ? ' is-invalid' : '')}`}
        name="description"
        type="text"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="description" />
    </div>

    <div className="form-group">
      <label htmlFor="jobDescription">Job Description</label>
      <Field
        id="jobDescription"
        className={`form-control ${(errors.jobDescription && touched.jobDescription ? ' is-invalid' : '')}`}
        name="jobDescription"
        type="text"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="jobDescription" />
    </div>

    <div className="form-group">
      <label htmlFor="qualification">Qualification</label>
      <Field
        id="qualification"
        className={`form-control ${(errors.qualification && touched.qualification ? ' is-invalid' : '')}`}
        name="qualification"
        type="qualification"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="qualification" />
    </div>

    <div className="form-group">
      <label htmlFor="url">File upload</label>
      <Field
        id="url"
        name="url"
        type="file"
        onChange={(event) => {
          setFieldValue('url', event.currentTarget.files[0])
        }}
        className="form-control"
      />
    </div>

    <button className="btn btn-success" type="submit" disabled={isSubmitting}>Submit</button>
  </Form>
)
RenderForm.propTypes = {
  errors: PropTypes.shape().isRequired,
  touched: PropTypes.shape().isRequired,
  isSubmitting: PropTypes.bool.isRequired
}

const authLoginSchema = yup.object().shape({
  name: yup.string().required('Required'),
  description: yup.string().required('Required'),
  jobDescription: yup.string().required('Required'),
  qualification: yup.string().required('Required')
})

const FormsGamePublishNew = ({ onSubmit }) => (
  <Formik
    initialValues={{
      name: '',
      description: '',
      jobDescription: '',
      qualification: '',
      url: ''
    }}
    validationSchema={authLoginSchema}
    onSubmit={onSubmit}
    component={RenderForm}
  />
)
FormsGamePublishNew.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired
}

export default FormsGamePublishNew
