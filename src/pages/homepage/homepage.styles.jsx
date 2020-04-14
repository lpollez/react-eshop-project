import styled from 'styled-components';

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 8rem;

  @media screen and (max-width: 800px) {
    padding: unset;
  }
`;
