import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'

import FileField from '@/components/FileField'

const RenderForm = ({ values, errors, touched, isSubmitting, setFieldValue }) => (
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
        as="textarea"
        rows={6}
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
        as="textarea"
        rows={4}
      />
      <ErrorMessage component="div" className="invalid-feedback" name="jobDescription" />
    </div>

    <div className="form-group">
      <label htmlFor="qualification">Qualification</label>
      <Field
        id="qualification"
        className={`form-control ${(errors.qualification && touched.qualification ? ' is-invalid' : '')}`}
        name="qualification"
        type="text"
        as="textarea"
        rows={4}
      />
      <ErrorMessage component="div" className="invalid-feedback" name="qualification" />
    </div>

    <FileField
      name="url1"
      setFieldValue={setFieldValue}
      value={values.url1}
      existingFileUrl={values?.Images?.[0]?.url1}
    />

    <FileField
      name="url2"
      setFieldValue={setFieldValue}
      value={values.url2}
      existingFileUrl={values?.Images?.[0]?.url2}
    />

    <FileField
      name="url3"
      setFieldValue={setFieldValue}
      value={values.url3}
      existingFileUrl={values?.Images?.[0]?.url3}
    />

    <button className="btn btn-success" type="submit" disabled={isSubmitting}>Update</button>
  </Form>
)
RenderForm.propTypes = {
  errors: PropTypes.shape().isRequired,
  touched: PropTypes.shape().isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  values: PropTypes.shape().isRequired,
  setFieldValue: PropTypes.func.isRequired
}

const authLoginSchema = yup.object().shape({
  name: yup.string().required('Required'),
  description: yup.string().required('Required'),
  jobDescription: yup.string().required('Required'),
  qualification: yup.string().required('Required')
})

const FormsGamePublishEdit = ({ onSubmit, initialValues }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={authLoginSchema}
    onSubmit={onSubmit}
    component={RenderForm}
  />
)

FormsGamePublishEdit.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.shape().isRequired
}

export default FormsGamePublishEdit
