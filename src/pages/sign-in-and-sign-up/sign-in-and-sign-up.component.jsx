import React from 'react';

import { default as SignIn } from '../../components/sign-in/sign-in.container';
import { default as SignUp } from '../../components/sign-up/sign-up.container';

import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;
