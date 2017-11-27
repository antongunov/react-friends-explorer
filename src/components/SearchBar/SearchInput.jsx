import React from 'react';
import PropTypes from 'prop-types';

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
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
          value={this.props.value}
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
