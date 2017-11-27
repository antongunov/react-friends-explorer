import React from 'react';
import PropTypes from 'prop-types';

class RadioButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.onUserChange(this.radio.value);
  }

  render() {
    const {
      title,
      name,
      value,
      checked,
    } = this.props;
    const id = `${name}-${value}`;
    return (
      <label htmlFor={id}>
        <input
          type="radio"
          name={name}
          id={id}
          value={value}
          ref={(input) => this.radio = input}
          checked={checked}
          onChange={this.handleChange} /> {title}
      </label>
    );
  }
}

RadioButton.PropTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onUserChange: PropTypes.func.isRequired,
};

RadioButton.defaultProps = {
  checked: false,
};

export default RadioButton;
