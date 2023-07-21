import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { Box, TextField, Button } from '@mui/material';
import { auth } from '../../../auth/firebaseApp';

const SignUp = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '', confirmPassword: '' });

  const onInput = (e) =>
    setCredentials((state) => ({ ...state, [e.target.id]: e.target.value.trim() }));

  const onSubmit = () => {
    const { email, password, confirmPassword } = credentials;
    if (confirmPassword === password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          console.log('SUCCESS', result);
        })
        .catch((error) => {
          console.log('ERROR', error);
        });
    } else {
      console.log('PASSOWRDS DOES NOT MATCH');
    }
  };
  return (
    <Box>
      <TextField required id="email" label="Email" onChange={onInput} />
      <Box pt={2}>
        <TextField required type="password" id="password" label="Password" onChange={onInput} />
      </Box>
      <Box pt={2}>
        <TextField
          required
          type="password"
          id="confirmPassword"
          label="Confirm Password"
          onChange={onInput}
        />
      </Box>
      <Box pt={2}>
        <Button fullWidth onClick={onSubmit}>
          Register
        </Button>
      </Box>
    </Box>
  );
};

export default SignUp;
