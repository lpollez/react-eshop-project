import React from 'react';

import { FooterContainer } from './footer.styles';

const Footer = ({ currentUser }) => {
  console.log(currentUser);
  return (
    <FooterContainer>
      <p>{`${
        currentUser ? currentUser.displayName : 'anonymous '
      } connected`}</p>
    </FooterContainer>
  );
};

export default Footer;
