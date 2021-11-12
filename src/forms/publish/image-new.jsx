import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Field, Form } from 'formik'
import * as yup from 'yup'

const RenderForm = ({ setFieldValue, isSubmitting }) => (
  <Form>
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
  // errors: PropTypes.shape().isRequired,
  // touched: PropTypes.shape().isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  setFieldValue: PropTypes.func.isRequired
}

const imageChangeSchema = yup.object().shape({
  name: yup.string().required('Required'),
  checked: yup.boolean().required('Required')
})

const FormsImageNew = ({ initialValues, onSubmit }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={imageChangeSchema}
    onSubmit={onSubmit}
    component={RenderForm}
  />
)
FormsImageNew.propTypes = {
  initialValues: PropTypes.shape().isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default FormsImageNew
