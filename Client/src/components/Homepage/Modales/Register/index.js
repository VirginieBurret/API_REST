/* eslint-disable react/prop-types */
import React from 'react';
import './register.scss';
import { withFormik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, Redirect } from 'react-router-dom';
import {
  XCircleFill,
} from 'react-bootstrap-icons';

const Register = (props) => {
  const { handleSubmit, handleChange, values, redirect } = props;

  return (
    <>

      <div className="form">

        <form className="form__baseForm" onSubmit={handleSubmit} noValidate>

          <header className="form__header">
            <h2 className="form__header_title">Inscription</h2>
            <div className="form__header_closeForm">
              <Link to="/"> <XCircleFill color="red" size={40} /> </Link>
            </div>
          </header>

          <div className="form__field">
            <label className="formFieldLabel" htmlFor="name">
              Pseudo
              <ErrorMessage name="username">
                {(errMsg) => <span className="errorMessage">{errMsg}</span>}
              </ErrorMessage>
            </label>

            <div className="formFieldWrapInner">
              <input
                type="username"
                name="username"
                id="username"
                className="formField"
                value={values.username}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form__field">
            <label className="formFieldLabel" htmlFor="email">
              Email
              <ErrorMessage name="email">
                {(errMsg) => <span className="errorMessage">{errMsg}</span>}
              </ErrorMessage>
            </label>

            <div className="formFieldWrapInner">
              <input
                type="email"
                name="email"
                id="email"
                className="formField"
                value={values.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form__field">
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
                className="formField"
                value={values.password}
                onChange={handleChange}
              />
            </div>
            <span className="passwordCue">5 caractères minimum</span>
          </div>

          <div className="form__field">
            <label className="formFieldLabel" htmlFor="passwordConfirm">
              Confirmation du mot de passe
              <ErrorMessage name="passwordConfirm">
                {(errMsg) => <span className="errorMessage">{errMsg}</span>}
              </ErrorMessage>
            </label>
            <div className="formFieldWrapInner">
              <input
                type="password"
                name="passwordConfirm"
                id="passwordConfirm"
                className="formField"
                value={values.passwordConfirm}
                onChange={handleChange}
              />
            </div>
            <span className="passwordCue">5 caractères minimum</span>
          </div>

          <button className="submitButton" type="submit">Envoyer</button>

        </form>
      </div>

    </>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    email: '', password: '', firstName: '', passwordConfirm: '', lastName: '', gender: '', username: '', birthdate: '', register: 'false',
  }),
  validationSchema: Yup.object().shape({

    username: Yup.string()
      .required('Requis'),
    email: Yup.string()
      .email('Ton adresse mail n\'est pas valide')
      .required('Requis'),
    password: Yup.string()
      .min(5, 'Ton mot de passe doit contenir au moins 5 charactères')
      .required('Requis'),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Le mot de passe n\'est pas le même').required('Requis'),
  }),
  handleSubmit: (values, { props, setSubmitting, isSubmitting }) => {
    setSubmitting(false);
    props.handleRegister(values);
    isSubmitting(true);
  },


})(Register);
