import styled from 'styled-components';

export const FooterContainer = styled.div`
  height: 7rem;
  width: 100%;
  display: flex;
  margin-top: 2.5rem;
  justify-content: flex-end;
  align-items: center;
  padding-right: 1.5rem;

  @media screen and (max-width: 800px) {
    height: 6rem;
    padding: 1rem;
    margin-top: 1rem;
    justify-content: center;
  }
`;
