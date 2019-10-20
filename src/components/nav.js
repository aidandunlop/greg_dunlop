import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

const StyledNav = styled.div`
  width: 100%;
  height: 100%;

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0px;
    justify-content: space-between;
    flex-direction: column;
  }

  li {
    text-decoration: none;
    transition: color 1s ease-out;
    font-size: 18vw;
  }

  ${props => css`
    @media only screen and (max-width: ${props.theme.sizes.tablets}) {
      display: none;

      li {
        font-size: 12vw;
        border-radius: 5px;
        width: 100%;
        text-align: center;
        margin-bottom: 10px;
        color: white;
        transition: color 1s ease-out;
        a {
          width: 100%;
        }
        a:hover {
          color: ${props.theme.colors.secondary};
        }
        .active {
          color: white;
        }
      }

      ul {
        justify-content: center;
        align-items: center;
        margin: 10px;
        width: 100%;
      }
      ${props.isOpen &&
        css`
          display: flex;
          transition: all 1s ease-out;
          background-color: brown;
          overflow: hidden;
          height: calc(100vh - ${props.theme.sizes.headerHeight});
        `}
    }
    @media only screen and (min-width: ${props.theme.sizes.desktop}) {
      width: 250px;
      ul {
        color: grey;
        flex-direction: row;
      }
      li {
        font-size: 25px;
      }
      li a:hover {
        transition: color 1s ease-in;
        color: ${props.theme.colors.secondary};
      }
    }
  `}
`;

const activeClassName = 'nav-item-active';

const StyledLink = styled(Link).attrs({
  activeClassName,
})`
  ${props => css`
    @media only screen and (min-width: ${props.theme.sizes.desktop}) {
      &.${activeClassName} {
        color: ${props.theme.colors.secondary};
      }
    }
    @media only screen and (max-width: ${props.theme.sizes.tablets}) {
      &.${activeClassName} {
        color: white;
      }
    }
  `}
`;
const Nav = ({ isOpen, onClick }) => (
  <StyledNav isOpen={isOpen}>
    <ul>
      <li>
        <StyledLink to="/" onClick={onClick}>
          HOME
        </StyledLink>
      </li>
      <li>
        <StyledLink to="/about" onClick={onClick}>
          ABOUT
        </StyledLink>
      </li>
      <li>
        <StyledLink to="/work" onClick={onClick}>
          WORK
        </StyledLink>
      </li>
    </ul>
  </StyledNav>
);

export default Nav;
