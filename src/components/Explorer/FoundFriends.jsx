import React from 'react';
import PropTypes from 'prop-types';

const FoundFriends = ({total}) => (
  <div>{`Found ${total} ${total === 1 ? 'person' : 'people'}.`}</div>
);

FoundFriends.propTypes = {
  total: PropTypes.number.isRequired,
};

export default FoundFriends;
