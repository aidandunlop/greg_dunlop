import React from 'react';

const videoRenderer = (node) => (
  <div style={{
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
  }}
  >
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '56.25%',
        height: '0',
      }}
    >
      <iframe
        title={node.data.uri}
        src={node.data.uri}
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          border: '0',
          maxWidth: '100%',
        }}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div>
);

const embedLinkMap = [
  {
    url: 'youtube.com/embed',
    renderer: videoRenderer,
  },
];

const hyperlinkRendering = (node, children) => {
  const embedLink = embedLinkMap.find((link) => node.data.uri.includes(link.url));
  if (embedLink) {
    return embedLink.renderer(node);
  }
  return <a href={node.data.uri}>{children}</a>;
};

export default hyperlinkRendering;
