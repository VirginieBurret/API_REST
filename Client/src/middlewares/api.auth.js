import axios from 'axios';
import React from 'react';
import swal from 'sweetalert2';
import { REGISTER } from '../actions/user';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case REGISTER: {
      axios({
        method: 'post',
        url: 'http://localhost:5000/api/users/register',
        withCredentials: true,
        data: {
          email: action.data.email,
          password: action.data.password,
          username: action.data.username,
        },

      }).then((response) => {
        console.log(response);

        swal('Merci pour ton inscription!', 'success')
          .then(() => {
            window.location = '/';
          });
      }).catch((error) => {
      });
      next(action);
      break;
    }
    default:
      next(action);
  }
};
