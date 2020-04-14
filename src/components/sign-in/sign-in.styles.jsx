import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const SignInContainer = styled.div`
  width: 65rem;
  display: flex;
  flex-direction: column;
  margin-right: 2rem;

  @media screen and (max-width: 920px) {
    width: 85vw;
  }
`;

export const SignInTitle = styled.h2`
  margin: 1rem 0;
`;

export const GoogleButtonBar = styled(CustomButton)`
  font-size: 100%;

  @media screen and (max-width: 420px) {
    font-size: 75%;
  }
`;

export const ButtonsBarContainer = styled.div`
  width: 38rem;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    width: 85vw;
  }
`;
