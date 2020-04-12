import React from 'react';

import { default as Directory } from '../../components/directory/directory.container';

import { HomePageContainer } from './homepage.styles';

const HomePage = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default HomePage;
