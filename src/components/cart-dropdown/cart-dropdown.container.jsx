import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toogleCartHidden } from '../../redux/cart/cart.actions';

import { withRouter } from 'react-router-dom';

import CartDropdown from './cart-dropdown.component';

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = dispatch => ({
  toogleCartHidden: () => dispatch(toogleCartHidden()),
});

const CartDropdownContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(CartDropdown);

export default CartDropdownContainer;
