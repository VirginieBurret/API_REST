import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2/src/sweetalert2';
import { REGISTER, TRY_TO_LOGIN, logIn } from '../actions/user';
import './scss.scss';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case REGISTER: {
      axios({
        method: 'post',
        url: 'http://localhost:4000/api/users/register',
        withCredentials: true,
        data: {
          email: action.data.email,
          password: action.data.password,
          username: action.data.username,
        },

      }).then((response) => {
       // console.log(response);

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Merci pour ton inscription, tu peux maintenant te connecter',
          showConfirmButton: false,
          timer: 1500,
         
        })
          .then(() => {
            window.location = '/';
          });
      }).catch((error) => {
      });
      next(action);
      break;
    }
    case TRY_TO_LOGIN: {
      console.log(action);
      axios({
        method: 'post',
        url: 'http://localhost:4000/api/users/login',
        withCredentials: true,
        data: {
          email: action.data.email,
          password: action.data.password,
        },
      }).then((response) => {
       console.log(response);
       store.dispatch(logIn(response.data.user));
      }).catch((error) => {
        console.log(error);
      });
      next(action);
      break;
    }

    default:
      next(action);
  }
};
