import React from 'react';
import PropTypes from 'prop-types';

const PersonInfo = ({person}) => {
  const friendCnt = person.friends.length;
  return (
    <div className="person-info">
      <p>{`${person.name} has got ${friendCnt} friend${friendCnt > 1 ? 's' : ''}.`}</p>
    </div>
  );
};

PersonInfo.propTypes = {
  person: PropTypes.object.isRequired,
};

export default PersonInfo;
