/* eslint-disable max-len */
import React, { Component } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './register.scss';
import { Link } from 'react-router-dom';

const CustomInput = ({ field, form, ...props }) => (
  <div className="form-group">
    <label>{field.name}</label>
    <input {...field} {...props} type="text" className="form-control" />
  </div>
);

const CustomError = (props) => (
  <div className="test-danger">{ props.children }</div>
);

class Register extends Component {
// on va définir un schema de validation avec YUP
// on va fournir ce shéma en argument

userSchema= Yup.object().shape({
  // on veut que le nom soit une chaine de caractère, minimum 8 caractères, maximum 15 caractères et obligatoirement rempli
  name: Yup.string().min(8, 'trop court').max(15, 'trop long').required('Entrez votre nom svp'),
  // pas besoin de regex avec .email, on utilise le regex de yup
  email: Yup.string().email('email non valide').required('Entrez un email svp'),
  password: Yup.string().min(8, 'Le mot de passe doit faire au moins 8 caractères').required('Entrez un mot de passe svp'),
  passwordConfirm: Yup.string().oneOf([Yup.ref('password'), null], 'Les deux mots de passe doivent être identiques'),
})

submit = (values, actions) => {
  // console.log(values);
  // console.log(aciotns);
  actions.setSubmitting(false); // pour régler le fait qu'on peut pas rappuyer sur submit
}
// validate(values) {
//  console.log(values);

// let errors = {};
// if(!values.name){ // s'il n'y a pas de values.name
// errors.name='requis'; // pour rendre le name obligatoire
// }
// else if (values.name.length < 8){ // ou seulement  (values.name && values.name.length < 8) si on veut pas name required
//  errors.name ='Nom trop court'
// }
// return errors;
// }

render() {
  return (
    <div className="container-fluid p-5 bg-light
      d-flex flex-column justify-content-center align-items-center"
    >
      <Formik
        onSubmit={this.submit}
        initialValues={{ name: '', email: '', password: '' }}
         // validate={ this.validate}
          // validateOnBlur={false} pour enlever la validation au onBlur
          // validateOnChange={false} ça ça va permettre de valider seulement au clic sur le bouton submit
          // définir à quel moment on veut définir la validation
        validationSchema={this.userSchema}
      >

        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          isSubmitting,
          errors,
          touched, // garder en mémoire les éléments qui ont déjà été touchés
        }) => (
          <div className="formWrapper">

            <form onSubmit={handleSubmit} className="bg-white border p-5 d-flex flex-column">
              <Link to="/">
                <p>X</p>
              </Link>
              <Field name="name" type="text" component={CustomInput} />
              <ErrorMessage name="name" component={CustomError} />

              <Field name="email" type="email" component={CustomInput} />
              <ErrorMessage name="email" component={CustomError} />

              <Field name="password" type="password" component={CustomInput} />
              <ErrorMessage name="password" component={CustomError} />

              <Field name="passwordConfirm" component={CustomInput} />
              <ErrorMessage name="passwordConfirm" component={CustomError} />

              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Envoyer</button>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
}
}

export default Register;
