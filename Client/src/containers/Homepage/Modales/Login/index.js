import { connect } from 'react-redux';
import Login from '../../../../components/Homepage/Modales/Login';

const mapDispatchToProps = (dispatch) => ({
  handleLogin: (values) => {
    dispatch({
      type: 'TRY_TO_LOGIN',
      data: {
        email: values.email,
        password: values.password,
      },
    });
  },
});

export default connect(null, mapDispatchToProps)(Login);
