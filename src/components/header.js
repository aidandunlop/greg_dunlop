import React from 'react'
import styled, { css } from 'styled-components'
import Title from './title'
import Menu from './menu'
import Nav from './nav'

const StyledHeader = styled.header`
  background-color: white;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  position: sticky;
  width: 100%;
  min-height: 90px;
  top: 0;
  z-index: 10;

  a {
    text-decoration: none;
    color: grey;
  }

  ${props =>
    props.isOpen &&
    css`
      @media only screen and (max-width: ${props.theme.sizes.tablets}) {
        height: calc(100vh - 90px);
      }
    `}
  ${props => css`
    @media only screen and (min-width: ${props.theme.sizes.desktop}) {
      flex-direction: column;
      min-height: 120px;
      align-items: center;
    }
  `}
`

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  handleClickOutside = evt => {
    this.setState(prevState => ({
      isOpen: false,
    }))
  }

  toggleMenu() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }))
  }

  render() {
    const isOpen = this.state.isOpen

    return (
      <StyledHeader isOpen={isOpen}>
        <Title />
        <Menu onClick={this.toggleMenu} isOpen={isOpen} />
        <Nav onClick={this.toggleMenu} isOpen={isOpen} />
      </StyledHeader>
    )
  }
}

export default Header
