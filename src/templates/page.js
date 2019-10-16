/* eslint-disable react/display-name */
import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import SEO from '../components/seo'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import Layout from '../components/layout'
import hyperlinkRendering from '../components/hyperlink'
import styled from 'styled-components'

const StyledPage = styled.div`
  padding: 0 10px;
  font-size: 18px;
  
  @media only screen and (min-width: ${props => props.theme.sizes.tabletMin}) {
    padding: 0 100px;
  }

  a {
    color: ${props => props.theme.colors.secondary}
  }
`
const PageTemplate = ({ data }) => {
  const { title, slug, content, showHeader } = data.contentfulPage

  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: hyperlinkRendering,
      [INLINES.ASSET_HYPERLINK]: node => (
        <img
          alt={node.data.target.fields.description['en-US']} // get safely
          src={node.data.target.fields.file['en-US'].url}
          style={{ width: '50vw', margin: '0 auto' }}
        />
      ),
      [BLOCKS.EMBEDDED_ASSET]: node => (
        console.log(node) ||
        <img
          alt={node.data.target.fields.description['en-US']}
          src={node.data.target.fields.file['en-US'].url}
          style={{ width: '50vw', margin: '0 auto' }}
        />
      ),
    },
  }
  return (
    <Layout showHeader={showHeader}>
      <SEO title={title} pathname={slug} />
      <Helmet title={title} />
      <StyledPage>
        {documentToReactComponents(content.json, options)}
      </StyledPage>
    </Layout>
  )
}

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
`

export default PageTemplate
