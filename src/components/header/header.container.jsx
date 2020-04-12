import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { signOutStart } from '../../redux/user/user.actions';
import { selectCurentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import Header from './header.component';

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart()),
});

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
