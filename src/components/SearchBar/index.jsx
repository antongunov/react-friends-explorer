import React from 'react';
import PropTypes from 'prop-types';
import SearchInput from './SearchInput';
import Gender from './Gender';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
  }

  handleSearchInputChange(value) {
    this.props.onUserChange({searchText: value});
  }

  handleGenderChange(value) {
    this.props.onUserChange({gender: value});
  }

  render() {
    const {
      placeholder,
      searchText,
      gender,
    } = this.props;
    return (
      <form>
        <SearchInput
          placeholder={placeholder}
          value={searchText}
          onUserChange={this.handleSearchInputChange} />
        <Gender
          value={gender}
          onUserChange={this.handleGenderChange} />
      </form>
    );
  }
}

SearchBar.PropTypes = {
  placeholder: PropTypes.string,
  searchText: PropTypes.string,
  gender: PropTypes.oneOf(['male', 'female', 'not-specified']),
  onUserChange: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  placeholder: 'Search...',
  searchText: '',
  gender: 'not-specified',
};

export default SearchBar;
