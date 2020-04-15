import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 65rem;
  margin-left: 2rem;

  @media screen and (max-width: 920px) {
    width: 85vw;
    margin-left: unset;
  }
`;

export const SignUpTitle = styled.h2`
  margin: 1rem 0;
`;
