/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss} aria-label="Categories">
      <Content>
        <DismissButton onClick={onDismiss}>
          <Icon size={24} id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </DismissButton>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-backdrop);
  top: 0;
  right: 0; 
`

const Content = styled(DialogContent)`
  position: absolute;
  max-width: 80vw;
  width: 300px;
  height: 100vh;
  background-color: white;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 26px 16px 32px 32px;
`

const DismissButton = styled(UnstyledButton)`
  align-self: flex-end;
  justify-self: flex-end;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-family: 'Raleway';
  text-decoration: none;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 600;

  & :hover {
    color: var(--color-secondary);
  }
`

const Footer = styled.footer`
  justify-self: flex-end;
  display: flex;
  flex-direction: column;
  gap: 14px;
`

const FooterLink = styled.a`
  color: var(--color-gray-700);
  text-decoration: none;
  font-size: 14px;
`

export default MobileMenu;
