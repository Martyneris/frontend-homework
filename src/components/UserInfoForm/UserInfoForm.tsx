import React, { FC } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Paper, Stack, Typography } from '@mui/material';

import { translationsEn } from '@/src/translations/en';
import { TextInput } from '../TextInput/TextInput';
import { DefaultButton } from '../DefaultButton/DefaultButton';
import { validationSchema } from './validationSchema';
import { UserInfoFormValues } from '@/src/types/Forms';

interface UserInfoFormProps {
  onSubmit: (data: UserInfoFormValues) => void;
}

export const UserInfoForm: FC<UserInfoFormProps> = ({ onSubmit }) => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'all',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
  });

  return (
    <Paper>
      <form onSubmit={handleSubmit(onSubmit)} role="form">
        <Stack
          padding={4}
          gap={4}
          borderRadius={2}
          width={380}
          sx={{ boxShadow: '0px 4px 16px -4px rgba(0, 0, 0, 0.10)' }}
        >
          <Typography fontSize={24} fontWeight={700}>
            {translationsEn.enterYourDetailsTitle}
          </Typography>
          <Stack gap={3}>
            <TextInput control={control} name="firstName" label="First name" required />
            <TextInput control={control} name="lastName" label="Last name" required />
            <TextInput control={control} name="email" label="E-mail" required />
          </Stack>
          <DefaultButton title={translationsEn.buttonNext} type="submit" />
        </Stack>
      </form>
    </Paper>
  );
};
