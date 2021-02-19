import { connect } from 'react-redux';
import Register from '../../../components/Homepage/Modales';

const mapStateToProps = (state) => ({
  register: !state.user.register,
});

const mapDispatchToProps = (dispatch) => ({
  handleRegister: (values) => {
    dispatch({
      type: 'REGISTER',
      data: {
        username: values.username,
        email: values.email,
        password: values.password,

      },
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
