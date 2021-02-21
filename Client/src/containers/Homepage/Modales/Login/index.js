import { connect } from 'react-redux';
import Login from '../../../../components/Homepage/Modales/Login';

const mapDispatchToProps = (dispatch) => ({
  handleLogin: (values) => {
    dispatch({
      type: 'LOG_IN',
      data: {
        email: values.email,
        password: values.password,
      },
    });
  },
});

export default connect(null, mapDispatchToProps)(Login);
