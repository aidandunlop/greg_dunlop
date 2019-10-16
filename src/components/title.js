import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const StyledTitle = styled.div`
  flex-grow: 8;
  font-size: 55px;

  a {
    transition: all 1s ease;
  }

  a:hover {
    color: ${props => props.theme.colors.secondary};
  }

  @media (max-width: 425px) {
    font-size: 25px;
    padding: 20px;
    box-sizing: border-box;
    height: 90px;
  }

  @media (min-width: 425px) and (max-width: 1024px) {
    padding: 20px;
    font-size: 35px;
    box-sizing: border-box;
    height: 90px;
  }
`;
const query = graphql`
  query titleQuery {
    site {
      siteMetadata {
        siteTitle
      }
    }
  }
`;

const Title = () => {
  const { site } = useStaticQuery(query);
  const {
    siteMetadata: { siteTitle },
  } = site;

  return (
    <StyledTitle>
      <Link to="/">{siteTitle}</Link>
    </StyledTitle>
  );
};

export default Title;
