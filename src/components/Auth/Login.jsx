import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import InputField from '../shared/components/InputField/InputField';
import Logo from '../../assets/logo/Innercalm.png'; 
import './Login.css';

const Login = () => {
  const [phone, setPhone] = useState('');

  const handleChange = (value) => {
    setPhone(value);
  };

  const handleSubmit = () => {
    console.log(phone);
  };

  return (
    <Box className="login-container">
      <Box className="login-box" sx={{
        width: '750px',
        height: '400px'
      }}>
        <Box sx={{
          width: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img src={Logo} width={250} alt="Logo" />
        </Box>
        <Box className="login-form" sx={{
          paddingX: '40px'
        }}>
          <Typography variant='h5'>Login or Register</Typography>
          <InputField 
            label="Mobile Number" 
            margin="normal" 
            sx={{marginBottom: '20px'}} 
            value={phone}
            onChange={(e) => handleChange(e.target.value)}
          />
          <Button 
            variant="contained" 
            color="primary" 
            fullWidth
            onClick={handleSubmit}
          >
            Continue
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
