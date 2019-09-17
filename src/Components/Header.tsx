import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #fff;
  color: #000;
  width: 100%;
`;

const Heading = styled.h1`
  font-size: 2rem;
  padding: 1.5rem;
`;

const Header: React.FC = (): JSX.Element => {
  return (
    <HeaderContainer id="header">
      <Heading>Pokemon Search</Heading>
    </HeaderContainer>
  )
};

export default Header;
