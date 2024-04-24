import { Paper, Stack, Typography } from '@mui/material';
import React, { FC, PropsWithChildren } from 'react';
import { DefaultButton } from '../DefaultButton/DefaultButton';

interface FormLayoutProps extends PropsWithChildren {
  title: string;
  buttonTitle: string;
  onSubmit: () => void;
}

export const FormLayout: FC<FormLayoutProps> = ({ title, buttonTitle, onSubmit, children }) => {
  return (
    <Paper>
      <Stack
        padding={4}
        gap={4}
        borderRadius={2}
        width={380}
        sx={{ boxShadow: '0px 4px 16px -4px rgba(0, 0, 0, 0.10)' }}
      >
        <Typography fontSize={24} fontWeight={700}>
          {title}
        </Typography>
        <Stack gap={3}>{children}</Stack>
        <DefaultButton title={buttonTitle} onClick={onSubmit} />
      </Stack>
    </Paper>
  );
};
