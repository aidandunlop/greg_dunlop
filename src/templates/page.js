/* eslint-disable react/display-name */
import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import SEO from '../components/seo';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import Layout from '../components/layout';
import hyperlinkRendering from '../components/hyperlink';
import styled from 'styled-components';

const StyledPage = styled.div`
  padding: 0 10px;
  font-size: 18px;

  @media only screen and (min-width: ${props => props.theme.sizes.tabletMin}) {
    padding: 0 100px;
  }

  a {
    color: ${props => props.theme.colors.secondary};
  }

  h1 {
    text-align: center;
  }
`;
const StyledImg = styled.img`
  width: 50%;
  max-width: 600px;
  margin: 0px auto;
`;
const ImageWrapper = styled.div`
  text-align: center;
`;

const ImageRenderer = ({ node }) =>
  node.data.target.fields ? (
    <ImageWrapper>
      <StyledImg
        alt={node.data.target.fields.description['en-US']}
        src={node.data.target.fields.file['en-US'].url}
      />
    </ImageWrapper>
  ) : null;

const PageTemplate = ({ data }) => {
  const { title, slug, content, showHeader } = data.contentfulPage;

  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: hyperlinkRendering,
      [INLINES.ASSET_HYPERLINK]: node => (
        <a href={node.data.target.fields.file['en-US'].url}>
          {node.data.target.fields.title['en-US']}
        </a>
      ),
      [BLOCKS.EMBEDDED_ASSET]: node => <ImageRenderer node={node} />,
    },
  };
  return (
    <Layout showHeader={showHeader}>
      <SEO title={title} pathname={slug} />
      <Helmet title={title} />
      <StyledPage>
        {documentToReactComponents(content.json, options)}
      </StyledPage>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      slug
      showHeader
      content {
        json
      }
    }
  }
`;

export default PageTemplate;
