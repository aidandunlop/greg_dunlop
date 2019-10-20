import React from 'react';
import PropTypes from 'prop-types';

import SEO from '../components/seo';
import Layout from '../components/layout';

const NotFound = () => {
  return (
    <Layout>
      <SEO />
      <div>
        <h1>Uh oh, this page does not exist! What does exist?</h1>
      </div>
    </Layout>
  );
};

NotFound.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
      }),
    }),
    contentfulEssay: PropTypes.shape({
      author: PropTypes.string,
      content: PropTypes.shape({
        json: PropTypes.object,
      }),
      slug: PropTypes.string,
      title: PropTypes.string,
    }),
  }).isRequired,
};

export default NotFound;
