import React from 'react';
import classNames from 'classnames';

const ContentContainer = (props) => (
  <div className={classNames('container', { 'main-content': props.main })}>
    {props.children}
  </div>
);

ContentContainer.propTypes = {
  children: React.PropTypes.node,
  main: React.PropTypes.bool,
};

export default ContentContainer;
