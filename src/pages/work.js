import React, { useState } from 'react';
import Spinner from 'react-spinkit';
// import Carousel, { ModalGateway, Modal } from 'react-images';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import FsLightbox from 'fslightbox-react';

const ImagesContainer = styled.div`
  line-height: 0;
  -webkit-column-count: 3;
  -webkit-column-gap: 0px;
  -moz-column-count: 3;
  -moz-column-gap: 0px;
  column-count: 3;
  column-gap: 2px;
  width: 100%;
  height: 100%;

  img {
    width: 100% !important;
    height: auto !important;
    margin-bottom: 2px;
    cursor: pointer;
  }

  @media only screen and (max-width: 1200px) {
    -moz-column-count: 3;
    -webkit-column-count: 3;
    column-count: 3;
  }
  @media only screen and (max-width: 800px) {
    -moz-column-count: 2;
    -webkit-column-count: 2;
    column-count: 2;
  }
  @media only screen and (max-width: 400px) {
    -moz-column-count: 1;
    -webkit-column-count: 1;
    column-count: 1;
  }
`;

const StyledImage = styled(Img).attrs(props => ({
  tabIndex: props.tabIndex,
}))`
  margin-bottom: 2px;
  display: inline-block;
  width: 100%;
`;

const Work = props => {
  const [currentImage, setCurrentImage] = useState(1);
  const [toggler, setToggler] = useState(false);
  const openLightbox = index => {
    setCurrentImage(index + 1);
    setToggler(!toggler);
  };

  const {
    allContentfulAsset: { edges },
  } = props.data;

  const photos = props.data.allContentfulAsset.edges.map(
    item => item.node.file.url
  );
  return (
    <Layout>
      {edges && edges.length > 0 ? (
        <>
          <ImagesContainer>
            {edges.map((item, index) => {
              return (
                <StyledImage
                  key={item.node.title}
                  fluid={item.node.fluid}
                  tabIndex={index}
                  onClick={() => {
                    openLightbox(index);
                  }}
                />
              );
            })}
          </ImagesContainer>
          <FsLightbox toggler={toggler} sources={photos} slide={currentImage} />
        </>
      ) : (
        <Spinner name="double-bounce" color="red" />
      )}
    </Layout>
  );
};

export const pageQuery = graphql`
  query workQuery {
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

export default Work;
