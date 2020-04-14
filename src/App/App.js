import React, { useEffect } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from '../pages/homepage/homepage.component';
import SignInAndSignUpPage from '../pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { default as Header } from '../components/header/header.container';
import { default as ShopPage } from '../pages/shop/shop.container';
import { default as CheckoutPage } from '../pages/checkout/checkout.container';

import { GlobalStyle } from './global.styles';

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};

export default App;