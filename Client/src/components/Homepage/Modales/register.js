import React, { Component } from 'react';
import { formik } from 'formik';

import './register.scss';

class Register extends Component {
submit = (values) => {

}
  render() {
    return (
      <div className="container-fluid p-5 bg-light
      d-flex flex-column justify-content-center align-items-center">
        <Formik
          onSubmit={ this.submit}
          initialValues={ {name:'', email:'', password:''} }
          >

          {({
            handleChange,
            handleBlur,
            handlSubmit,
            values,
            isSubmitting
          }) => (

<form onSubmit={handleSubmit} className="bg-white border p-5 d-flex flex-column">
<div className="form-group">
  <label>Nom</label>
  <input name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} type="text" className="form-control" />
</div>
<div className="form-group">
              <label>Adresse email</label>
              <input name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} type="email" className="form-control" />
            </div>
            <div className="form-group">
              <label>Mot de passe</label>
              <input name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} type="password" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              Envoyer
            </button>
          </form>
        )}
      </Formik>
    </div>
  )
}
