import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';
import favicon from '../../static/logos/logo.ico';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';
import config from '../utils/site-config';
import Header from './header';

const Footer = styled.footer`
  padding-right: 10px;
  text-align: right;
  height: ${props => props.theme.sizes.footerHeight};
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.secondary};
  }
`;

const ContentContainer = styled.div`
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: scroll;
  flex: 1;
  ${props => css`
    min-height: calc(
      100vh - ${props.theme.sizes.headerHeight} -
        ${props.theme.sizes.footerHeight}
    );
    @media only screen and (min-width: ${props.theme.sizes.desktop}) {
      min-height: calc(
        100vh - ${props.theme.sizes.desktopHeaderHeight} -
          ${props.theme.sizes.footerHeight}
      );
    }
  `}
  );
`;

const Layout = ({ children, showHeader = true }) => {
  return (
    <div className="siteRoot">
      <Helmet>
        <title>{config.siteTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon} />
      </Helmet>
      <ThemeProvider theme={theme}>
        <>
          {showHeader && <Header />}
          <ContentContainer>{children}</ContentContainer>
          <Footer>
            Created by <a href="https://github.com/aidandunlop">Aidan Dunlop</a>
          </Footer>
        </>
      </ThemeProvider>
      <GlobalStyle />
    </div>
  );
};

export default Layout;
