import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { default as Header } from '../components/header/header.container';
import { default as Footer } from '../components/footer/footer.container';
import Spinner from '../components/spinner/spinner.component';
import ErrorBoundary from '../components/error-boundary/error-boundary.component';
import { GlobalStyle } from './global.styles';

const HomePage = lazy(() => import('../pages/homepage/homepage.component'));
const SignInAndSignUpPage = lazy(() =>
  import('../pages/sign-in-and-sign-up/sign-in-and-sign-up.component')
);
const ShopPage = lazy(() => import('../pages/shop/shop.container'));
const CheckoutPage = lazy(() => import('../pages/checkout/checkout.container'));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route
              path="/signin"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
              }
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
