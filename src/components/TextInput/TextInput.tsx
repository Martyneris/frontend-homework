import React, { FC, forwardRef } from 'react';

import { Stack, TextField, TextFieldProps, Typography } from '@mui/material';
import { Control, Controller, useForm } from 'react-hook-form';
import { UserFormFieldName } from '@/src/types/Forms';
import { colors } from '@/src/styles/styles';

type TextInputProps = TextFieldProps & {
  name: UserFormFieldName;
  control: Control<{ firstName: string; lastName: string; email: string }, any>;
  // testId: string;
};

export const TextInput: FC<TextInputProps> = ({ name, control, label }) => {
  return (
    <Stack gap={1}>
      <Typography fontSize={14} fontWeight={400} color={colors.secondaryBlack}>
        {label}
      </Typography>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            helperText={error ? error.message : null}
            error={!!error}
            fullWidth
            label={name}
            InputLabelProps={{ sx: { display: 'none' }, shrink: false }}
            variant="outlined"
            InputProps={{ sx: { borderRadius: 2 } }}
            sx={{
              '& .MuiInputBase-input': {
                paddingY: 1.5,
                paddingX: 1,
              },
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: colors.gray,
                },
                '&.Mui-focused fieldset': {
                  borderColor: colors.gray,
                },
              },
            }}
          />
        )}
      />
    </Stack>
  );
};
