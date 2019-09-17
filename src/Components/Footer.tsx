import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  color: #000;
  padding-bottom: 2rem;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.a`
  color: silver;
  font-size: 1.5rem;
  margin: 0 1rem;
`;

const Footer: React.FC = (): JSX.Element => {
  return (
    <FooterContainer id="contact">
      <p>Page written by Marina Froes A. Costa</p>
      <IconContainer>
        <Icon href="https://github.com/MarinaFroes" target="_blank">
          {<FaGithub />}
        </Icon>
        <Icon
          href="https://www.linkedin.com/in/marina-froes-a-costa/"
          target="_blank"
        >
          {<FaLinkedin />}
        </Icon>
      </IconContainer>
    </FooterContainer>
  )
};

export default Footer;
