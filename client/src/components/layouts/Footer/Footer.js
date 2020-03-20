import React from 'react';
import { Container } from './FooterStyled';

const Footer = () => {
  return (
    <Container>
      {new Date().getFullYear()} All right Reserved. My company.
    </Container>
  );
};

export default Footer;


