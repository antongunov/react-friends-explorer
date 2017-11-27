import React from 'react';
import SearchBar from './SearchBar';
import FoundFriends from './FoundFriends';
import FriendList from './FriendList';
import friends from 'assets/js/friends';

class Explorer extends React.Component {
  constructor(props) {
    super(props);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.state = {
      friends: [],
      total: 0,
      search: {
        searchText: '',
        gender: 'not-specified',
      },
    };
  }

  handleUserChange(updater) {
    this.setState({
      search: Object.assign(this.state.search, updater)
    }, () => {
      friends.search(this.state.search, 0, 30)
        .then(({items, total}) => this.setState({friends: items, total}));
    });
  }

  render() {
    const {
      friends,
      total,
      search,
    } = this.state;
    return (
      <div className="explorer">
        <SearchBar
          placeholder="Search friends..."
          searchText={search.searchText}
          gender={search.gender}
          onUserChange={this.handleUserChange} />
        <FoundFriends total={total} />
        <FriendList items={friends} />
      </div>
    );
  }
}

export default Explorer;
