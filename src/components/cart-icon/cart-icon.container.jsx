import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toogleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import CartIcon from './cart-icon.component';

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = dispatch => ({
  toogleCartHidden: () => dispatch(toogleCartHidden()),
});

const CartIconContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);

export default CartIconContainer;
