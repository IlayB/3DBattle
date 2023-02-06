import React from 'react';

import { useNavigate } from 'react-router-dom';
import {
  DialogActions,
  DialogContent,
  Dialog,
  DialogTitle,
  Typography,
  Button,
} from '@mui/material';

const TestModal = () => {
  const navigate = useNavigate();
  return (
    <Dialog open onClose={() => navigate.goBack()} disableEnforceFocus scroll="body">
      <DialogTitle>TestModal</DialogTitle>
      <DialogContent dividers>TestModal description</DialogContent>
      <DialogActions>
        <Button onClick={() => navigate.goBack()} variant="contained">
          <Typography weight="semibold">Back</Typography>
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default TestModal;
