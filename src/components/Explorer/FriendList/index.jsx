import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import FriendItem from './FriendItem';

const FriendList = ({items}) => {
  const list = items.map(item => (
    <li className="friend-list__item" key={item.id}>
      <FriendItem
        id={item.id}
        name={item.name}
        gender={item.gender}
        age={item.age}
        company={item.company} />
    </li>
  ));
  return (
    <ul className="friend-list">{list}</ul>
  );
};

FriendList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default FriendList;
