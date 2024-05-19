import { Box } from '@mui/material';
import React from 'react';

export default function Preview() {
  return (
    <div>
      <Box sx={{ position: 'fixed', top: 0, left: 0, width: '100%', height: 100, bgcolor: 'grey.300' }}>
        <h1>Header (Fixed)</h1>
      </Box>
      <Box sx={{ marginTop: '100px', height: 200, bgcolor: 'error.main' }}>
        <h2>First Element (Fixed)</h2>
      </Box>
      <Box sx={{ position: 'sticky', top: 0, height: 2000, bgcolor: 'success.main' }}>
        <h2>Second Element (Scrollable)</h2>
      </Box>
    </div>
  );
}
