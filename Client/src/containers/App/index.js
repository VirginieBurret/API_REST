import { connect } from 'react-redux';
import App from '../App';

const mapStateToProps = (state) => {
  console.log(state);

  return {
   // isLogged: state.user.logged,
  
  };
};



export default connect(mapStateToProps, null)(App);
