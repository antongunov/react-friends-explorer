import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const FriendItem = ({name, gender, age, company}) => {
  let info = '';
  if (gender) info = gender;
  if (age) info = `${info}, ${age} y.o.`;
  if (company) info = `${info}, works for ${company}`;
  return (
    <div className="friend-item">
      <div className="friend-item__name">{name}</div>
      <div className="friend-item__info">{info}</div>
    </div>
  );
};

FriendItem.propTypes = {
  name: PropTypes.string.isRequired,
  gender: PropTypes.string,
  age: PropTypes.string,
  company: PropTypes.string,
};

FriendItem.defaultProps = {
  gender: '',
  age: '',
  company: '',
};

export default FriendItem;
