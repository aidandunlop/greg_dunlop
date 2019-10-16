import React from 'react'
import styled, { css } from 'styled-components'

const Hamburger = styled.div`
  cursor: pointer;
  padding: 20px;

  ${props => css`
    @media only screen and (min-width: ${props.theme.sizes.desktop}) {
      display: none;
    }`
  }
`
// TODO: add bar background colour to theme
const Bar = styled.div`
  width: 30px;
  height: 5px;
  background-color: grey;
  margin: 6px 0;
  transition: 0.4s;
  border-radius: 2px;
`

const FirstBar = styled(Bar)`
  ${props =>
    props.isOpen &&
    css`
      -webkit-transform: translate(0px, 11px) rotate(-45deg);
      transform: translate(0px, 11px) rotate(-45deg);
      background-color: ${props.theme.colors.secondary}
    `};
`
const SecondBar = styled(Bar)`
  ${props =>
    props.isOpen &&
    css`
      opacity: 0;
    `};
`
const ThirdBar = styled(Bar)`
  ${props =>
    props.isOpen &&
    css`
    background-color: ${props.theme.colors.secondary};
    -webkit-transform: translate(0px, -11px) rotate(45deg);
    transform: translate(0px, -11px) rotate(45deg);
    `};
`


const Menu = ({ isOpen, onClick }) => (
  <>
    <Hamburger onClick={onClick}>
      <FirstBar isOpen={isOpen} />
      <SecondBar isOpen={isOpen} />
      <ThirdBar isOpen={isOpen} />
    </Hamburger>
  </>
)

export default Menu
