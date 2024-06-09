// src/components/InputField.js
import React from 'react';
import { TextField } from '@mui/material';

const InputField = ({ value, onChange, label, variant = 'outlined', fullWidth = true, ...props }) => {
  return (
    <TextField
      label={label}
      variant={variant}
      fullWidth={fullWidth}
      value={value}
      onChange={onChange}
      size='small'
      {...props}
    />
  );
};

export default InputField;
