import React from 'react';
import './form-input.scss';
const FormInput = ({ label, ...props }) => {
  return (
    <div className='group'>
      <input {...props} className='form-input' />
      {label && (
        <label
          htmlFor={props.id}
          className={`${props.value.length ? 'shrink' : ''} form-input-label`}
        >
          {label} :{' '}
        </label>
      )}
    </div>
  );
};

export default FormInput;
