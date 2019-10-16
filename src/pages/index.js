import React from 'react';
import Helmet from 'react-helmet';
import config from '../utils/siteConfig';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Slider from 'react-slick';
import Spinner from 'react-spinkit';

import { graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const StyledContainer = styled.div`
  overflow: hidden;
`;
// width: 70vw;
// height: 80vh;

const Home = ({ data }) => {
  const postNode = {
    title: `Home - ${config.siteTitle}`,
  };
  const {
    allContentfulAsset: { edges },
  } = data;
  console.log(data);
  const settings = {
    // infinite: true,
    speed: 1000,
    autoplay: true,
    lazyLoad: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Layout>
      <Helmet>
        <title>{`${config.siteTitle}`}</title>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Helmet>
      <SEO postNode={postNode} pagePath="Home" customTitle />
      {edges && edges.length > 0 ? (
        <StyledContainer>
          <Slider {...settings}>
            {edges.map(item => (
              <Img key="i" fluid={item.node.fluid} />
            ))}
          </Slider>
        </StyledContainer>
      ) : (
        <Spinner name="double-bounce" color="red" />
      )}
    </Layout>
  );
};

export const pageQuery = graphql`
  query homeQuery {
    allContentfulAsset {
      edges {
        node {
          title
          fluid {
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
