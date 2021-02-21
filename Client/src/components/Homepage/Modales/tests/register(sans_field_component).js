import React, { Component } from 'react';
import { formik } from 'formik';
import * as Yup from 'yup';
import './register.scss';

class Register extends Component {
//on va définir un schema de validation avec YUP
//on va fournir ce shéma en argument

userSchema= Yup.object().shape({
  // on veut que le nom soit une chaine de caractère, minimum 8 caractères, maximum 15 caractères et obligatoirement rempli
  name:Yup.string().min(8, 'trop court').max(15, 'trop long').required('Entrez votre nom svp'),
  //pas besoin de regex avec .email, on utilise le regex de yup
  email:Yup.string().email('email non valide').required('Entrez un email svp'),
  password:Yup.string().min(8, 'Le mot de passe doit faire au moins 8 caractères').required('Entrez un modt de passe svp'),
  passwordConfirm: Yup.string().oneOf([Yup.ref('password'), null], 'Les deux mots de passe doivent être identiques')
})

submit = (values, actions) => {
  //console.log(values);
 // console.log(aciotns);
  actions.setSubmitting(false) //pour régler le fait qu'on peut pas rappuyer sur submit
  
  

}
//validate(values) {
//  console.log(values);
  
 // let errors = {};
 // if(!values.name){ // s'il n'y a pas de values.name
   //errors.name='requis'; // pour rendre le name obligatoire
  //}
  //else if (values.name.length < 8){ // ou seulement  (values.name && values.name.length < 8) si on veut pas name required
  //  errors.name ='Nom trop court'
  //}
  //return errors;
//}

  render() {
    return (
      <div className="container-fluid p-5 bg-light
      d-flex flex-column justify-content-center align-items-center">
        <Formik
          onSubmit={ this.submit}
          initialValues={ {name:'', email:'', password:''} }
         // validate={ this.validate}
          //validateOnBlur={false} pour enlever la validation au onBlur
          //validateOnChange={false} ça ça va permettre de valider seulement au clic sur le bouton submit
          //définir à quel moment on veut définir la validation

          validationSchema={this.userSchema} // ici on transmet le schéma de validation de YUP
          >

          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            isSubmitting,
            errors,
            touched // garder en mémoir les éléments qui ont déjà été touchés
          }) => (

<form onSubmit={handleSubmit} className="bg-white border p-5 d-flex flex-column">
<div className="form-group">
  <label>Nom</label>
  <input name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} type="text" className="form-control" />
 {errors.name &&  touched.name? ( // on affiche l'erreur s'il y a une erreur sur name et que l'utilisateur a déjà touché l'input
  <div className="text-danger">{errors.name}</div> // si errors.name on return cette div sinon on return null : on affiche pas d'erreur
 ): null}
</div>
<div className="form-group">
              <label>Adresse email</label>
              <input name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} type="email" className="form-control" />
              {errors.email &&  touched.email? ( // on affiche l'erreur s'il y a une erreur sur emailet que l'utilisateur a déjà touché l'input
  <div className="text-danger">{errors.email}</div> // si errors.name on return cette div sinon on return null : on affiche pas d'erreur
 ): null}
            </div>
            <div className="form-group">
              <label>Mot de passe</label>
              <input name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} type="password" className="form-control" />
              {errors.password &&  touched.password? ( // on affiche l'erreur s'il y a une erreur sur password et que l'utilisateur a déjà touché l'input
  <div className="text-danger">{errors.password}</div> // si errors.name on return cette div sinon on return null : on affiche pas d'erreur
 ): null}
            </div>
            <div className="form-group">
              <label>Confirmation du mot de passe</label>
              <input name="passwordConfirm" value={values.passwordConfirm} onChange={handleChange} onBlur={handleBlur} type="password" className="form-control" />
              {errors.passwordConfirm &&  touched.passwordConfirm? ( // on affiche l'erreur s'il y a une erreur sur name et que l'utilisateur a déjà touché l'input
  <div className="text-danger">{errors.passwordConfirm}</div> // si errors.name on return cette div sinon on return null : on affiche pas d'erreur
 ): null}
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

