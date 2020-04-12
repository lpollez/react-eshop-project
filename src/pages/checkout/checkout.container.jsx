import { connect } from 'react-redux';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

import CheckoutPage from './checkout.component';

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

const CheckoutContainer = connect(mapStateToProps)(CheckoutPage);

export default CheckoutContainer;
