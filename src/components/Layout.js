import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';
import favicon from '../images/favicon.ico';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';
import config from '../utils/siteConfig';
import Header from './header';

const Footer = styled.footer`
  padding-right: 10px;
  text-align: right;
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.secondary};
  }
`;
const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: scroll;
  flex: 1;
`;
// ${props => css`
//   @media only screen and (max-width: ${props.theme.sizes.mobiles}) {
//     padding: 0;
//   }

//   @media only screen and (min-width: ${props.theme.sizes.desktop}) {
//     padding-top: 0;
//     padding-bottom: 0;
//   }
// `}
const Template = ({ children, showHeader = true }) => {
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

export default Template;
