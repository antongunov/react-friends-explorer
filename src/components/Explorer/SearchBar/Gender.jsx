import React from 'react';
import PropTypes from 'prop-types';
import RadioButton from 'components/RadioButton';

const Gender = ({value, onUserChange}) => (
  <fieldset className="gender">
    <RadioButton
      title="Male"
      name="gender"
      value="male"
      checked={value === 'male'}
      onUserChange={onUserChange} />
    <RadioButton
      title="Female"
      name="gender"
      value="female"
      checked={value === 'female'}
      onUserChange={onUserChange} />
    <RadioButton
      title="Not Specified"
      name="gender"
      value="not-specified"
      checked={value === 'not-specified'}
      onUserChange={onUserChange} />
  </fieldset>
);

Gender.propTypes = {
  value: PropTypes.string.isRequired,
  onUserChange: PropTypes.func.isRequired,
};

export default Gender;
