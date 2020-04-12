import React from 'react';

import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer,
} from './cart-icon.styles';

const CartIcon = ({ toogleCartHidden, itemCount }) => (
  <CartContainer onClick={toogleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartContainer>
);

export default CartIcon;
