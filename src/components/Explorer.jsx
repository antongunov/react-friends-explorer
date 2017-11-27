import React from 'react';
import FriendList from './FriendList';
import SearchBar from './SearchBar';
import friends from 'assets/js/friends';

class Explorer extends React.Component {
  constructor(props) {
    super(props);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.state = {
      friends: [],
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
        .then(items => this.setState({friends: items}));
    });
  }

  render() {
    const {friends, search} = this.state;
    return (
      <div>
        <SearchBar
          placeholder="Search friends..."
          searchText={search.searchText}
          gender={search.gender}
          onUserChange={this.handleUserChange} />
        <FriendList items={friends} />
      </div>
    );
  }
}

export default Explorer;
