import React from 'react';

const ContentContainer = (props) => (
  <section className={'container'}>
    {props.children}
  </section>
);

ContentContainer.propTypes = {
  children: React.PropTypes.node,
};

export default ContentContainer;
