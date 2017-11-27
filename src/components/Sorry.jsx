import React from 'react';
import PropTypes from 'prop-types';

const Sorry = ({but}) => (
  <p>Sorry, but {but}.</p>
);

Sorry.propTypes = {
  but: PropTypes.string.isRequired,
};

export default Sorry;
