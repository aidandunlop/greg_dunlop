import React from 'react';
import Helmet from 'react-helmet';
import config from '../utils/site-config';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Spinner from 'react-spinkit';

import { graphql } from 'gatsby';
import styled, { css } from 'styled-components';
import Img from 'gatsby-image';

import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const ImageWrapper = styled.div`
  ${props => css`
    @media only screen and (min-width: ${props.theme.sizes.desktop}) {
      height: 70vh;
      width: calc(70vh * ${props.aspectRatio});
    }
  `}
  margin: 0 auto;
  background: white;
`;

const Home = ({ data }) => {
  const postNode = {
    title: `Home - ${config.siteTitle}`,
  };
  const {
    allContentfulAsset: { edges },
  } = data;

  return (
    <Layout>
      <Helmet>
        <title>{`${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="Home" customTitle />
      {edges ? (
        <StyledContainer>
          <Carousel
            autoPlay
            dynamicHeight
            infiniteLoop
            emulateTouch
            stopOnHover={false}
            showIndicators={false}
            showArrows={false}
            showThumbs={false}
            showStatus={false}
            interval={10000}
          >
            {edges.map(item => (
              <ImageWrapper
                key={item.node.title}
                aspectRatio={item.node.fluid.aspectRatio}
              >
                <Img fluid={item.node.fluid} />
              </ImageWrapper>
            ))}
          </Carousel>
        </StyledContainer>
      ) : (
        <Spinner name="double-bounce" color="red" />
      )}
    </Layout>
  );
};

export const pageQuery = graphql`
  query homeQuery {
    allContentfulAsset(
      filter: {
        title: { ne: "greg-purusha" }
        file: { contentType: { eq: "image/jpeg" } }
      }
      sort: { order: ASC, fields: [title] }
    ) {
      edges {
        node {
          title
          fluid {
            aspectRatio
            ...GatsbyContentfulFluid
          }
          file {
            url
          }
        }
      }
    }
  }
`;

export default Home;
