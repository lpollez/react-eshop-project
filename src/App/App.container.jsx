import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { checkUserSession } from '../redux/user/user.actions';
import { selectCurentUser } from '../redux/user/user.selectors';

import App from './App';

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
