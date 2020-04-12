import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';

import SignUp from './sign-up.component';

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials)),
});

const SignUpContainer = connect(null, mapDispatchToProps)(SignUp);

export default SignUpContainer;
