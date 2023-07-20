import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { Box, TextField, Button } from '@mui/material';
import { auth } from '../../../auth/firebaseApp';

const SignIn = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const onInput = (e) =>
    setCredentials((state) => ({ ...state, [e.target.id]: e.target.value.trim() }));

  const onSubmit = () => {
    const { email, password } = credentials;
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log('SUCCESS', result);
      })
      .catch((error) => {
        console.log('ERROR', error);
      });
  };
  return (
    <Box>
      <TextField required id="email" label="Email" onChange={onInput} />
      <Box pt={2}>
        <TextField required id="password" label="Password" onChange={onInput} type="password" />
      </Box>
      <Box pt={2}>
        <Button fullWidth onClick={() => onSubmit()}>
          Log In
        </Button>
      </Box>
    </Box>
  );
};

export default SignIn;
