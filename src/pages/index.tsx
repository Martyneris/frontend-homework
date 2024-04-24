import { usePackages } from '@/src/hooks/usePackages';
import { Paper, Stack } from '@mui/material';
import React from 'react';
import { colors } from '../styles/styles';
import { PurchaseForm } from '../components/PurchaseForm/PurchaseForm';

export default function Home() {
  return (
    <Paper
      sx={{
        backgroundColor: colors.brandBlue,
      }}
    >
      <Stack
        component="main"
        alignItems="center"
        justifyContent="center"
        sx={{ height: '100vh', width: '100vw' }}
      >
        <PurchaseForm />
      </Stack>
    </Paper>
  );
}
