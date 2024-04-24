import React, { FC } from 'react';
import { Button, ButtonProps, Typography } from '@mui/material';
import { colors } from '@/src/styles/styles';

export const DefaultButton: FC<ButtonProps> = ({ title, onClick, type }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      type={type}
      sx={{
        py: 1.5,
        borderRadius: 4,
        backgroundColor: colors.brandYellow,
        '&: hover': { backgroundColor: colors.brandYellow },
        height: '',
      }}
    >
      <Typography
        fontSize={14}
        fontWeight={600}
        lineHeight={'24px'}
        color={colors.black}
        textTransform="capitalize"
      >
        {title}
      </Typography>
    </Button>
  );
};
