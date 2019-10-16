import React from 'react';
import PropTypes from 'prop-types';

import SEO from '../components/seo';

const NotFound = () => {
  return (
    <>
      <SEO />
      <div>
        <h1>Uh oh, this page does not exist! </h1>
      </div>
    </>
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
