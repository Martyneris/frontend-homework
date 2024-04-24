import React, { FC } from 'react';
import Image from 'next/image';

import { Paper, Stack, Typography } from '@mui/material';
import { translationsEn } from '@/src/translations/en';

export const PurchaseComplete: FC = () => {
  return (
    <Paper>
      <Stack padding={6} gap={1} alignItems="center">
        <Image src="/icons/green-check.svg" alt="green checkmark" width="120" height="120" />
        <Typography fontSize={24} fontWeight={700}>
          {translationsEn.purchaseCompleteTitle}
        </Typography>
      </Stack>
    </Paper>
  );
};
