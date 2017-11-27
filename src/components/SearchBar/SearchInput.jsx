import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'assets/js/debounce';

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = debounce(this.handleChange.bind(this), 1000);
  }

  handleChange() {
    this.props.onUserChange(this.inputSearchText.value);
  }

  render() {
    return (
      <fieldset>
        <input
          placeholder={this.props.placeholder}
          type="text"
          // value={this.props.value}
          ref={(input) => this.inputSearchText = input}
          onChange={this.handleChange} />
      </fieldset>
    );
  }
}

SearchInput.PropTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onUserChange: PropTypes.func.isRequired,
};

SearchInput.defaultProps = {
  placeholder: 'Search...',
  value: '',
};

export default SearchInput;
