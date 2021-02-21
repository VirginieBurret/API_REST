import React from 'react';
import './login.scss';
import { withFormik, ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';




const Login = (props) => {
  const {
    handleSubmit,
    handleChange,
    values,
    isSubmitting,
  } = props;
  const isLoading = isSubmitting ? 'loading' : 'notLoading';
  return (

    <>
      <div className="formWrapper">
        <form className={`baseForm ${isLoading}`} onSubmit={handleSubmit} noValidate>
          {/* Form Header */}
          <header className="baseFormHeader">
            <h1 className="baseFormHeading">Connexion</h1>
            <div className="closeForm">
              <Link to="/">
                <p>X</p>
              </Link>
            </div>
          </header>
          <div className="formLoading">Connexion en cours...</div>
          {/* Form main content */}
          <div className="formItems">
            <div className="formFieldWrap">
              <label className="formFieldLabel" htmlFor="email">
                E-Mail
                <ErrorMessage name="email">
                  {(errMsg) => <span className="errorMessage">{errMsg}</span>}
                </ErrorMessage>
              </label>

              <div className="formFieldWrapInner">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="email formField"
                  value={values.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="formFieldWrap">
              <label className="formFieldLabel" htmlFor="password">
                Mot de Passe
                <ErrorMessage name="password">
                  {(errMsg) => <span className="errorMessage">{errMsg}</span>}
                </ErrorMessage>
              </label>
              <div className="formFieldWrapInner">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="password formField"
                  value={values.password}
                  onChange={handleChange}
                />
              </div>
              <span className="passwordCue">6 caractères minimum</span>
            </div>
            <div className="formRow col-1">
              <button className="submitButton" disabled={isSubmitting} type="submit">Envoyer</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

const initialValues = {
  email: '',
  password: '',
};

export default withFormik({
  mapPropsToValues: () => ({ ...initialValues }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Email non valide')
      .required('Requis'),
    password: Yup.string()
      .min(5, 'Le mot de passe doit faire au moins 5 caractères')
      .required('Requis'),
  }),
  handleSubmit: (values, { props, setSubmitting, resetForm }) => {
    // alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
    console.log(values);
    props.handleLogin(values);
  },
})(Login);
