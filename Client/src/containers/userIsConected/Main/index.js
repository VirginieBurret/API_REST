import { connect } from 'react-redux';

import userIsConected from '../../../components/userIsConected/Main';

const mapStateToProps = (state, ownProps) => {
  console.log('hého', state);

  return {
    currentUser: state.user,
  };
};

export default connect(mapStateToProps)(userIsConected);
