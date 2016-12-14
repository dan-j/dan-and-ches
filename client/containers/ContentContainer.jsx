import React from 'react';

const ContentContainer = ({ children }) => (
  <div className="container">
    {children}
  </div>
);

ContentContainer.propTypes = {
  children: React.PropTypes.node,
};

export default ContentContainer;
