import React, { FC } from 'react';
import { FormLayout } from '../FormLayout/FormLayout';
import { translationsEn } from '@/src/translations/en';
import { PackageID } from '@/src/types/Packages';
import { useCompletePurchase } from '@/src/hooks/useCompletePurchase';
import { useVatRates } from '@/src/hooks/useVatRates';
import { useUserCountry } from '@/src/hooks/useUserCountry';
import { Box, CircularProgress, Typography } from '@mui/material';
import { colors } from '@/src/styles/styles';
import { usePackages } from '@/src/hooks/usePackages';
import { pickCurrencySymbol } from '@/src/utils/currencies';
import { log } from 'console';

const CheckoutRow = ({ name, value }: { name: string; value: string | number }) => {
  return (
    <Box flexDirection="row" display="flex" alignItems="center" justifyContent="space-between">
      <Typography fontSize={18} fontWeight={400}>
        {name}
      </Typography>
      <Typography fontSize={18} fontWeight={600}>
        {value}
      </Typography>
    </Box>
  );
};

interface UserData {
  packageId: PackageID;
  firstName: string;
  lastName: string;
  email: string;
}

interface CheckoutProps {
  userData: UserData;
  onSuccess: () => void;
}

export const Checkout: FC<CheckoutProps> = ({ userData, onSuccess }) => {
  const { data: packages, isLoading: isLoadingPackages } = usePackages();
  const { data: vatRates, isLoading: isLoadingVatRates } = useVatRates();
  const { data: userCountry, isLoading: isLoadingUserCountry } = useUserCountry();
  const { mutateAsync: completePurchase } = useCompletePurchase();

  const showLoadingIndicator = isLoadingPackages || isLoadingVatRates || isLoadingUserCountry;

  const selectedPackage = packages?.find((item) => item.id === userData.packageId);
  const userVatRate = vatRates?.find((rate) => rate.countryCode === userCountry);

  const vatAmount =
    userVatRate?.rate && selectedPackage
      ? +((userVatRate?.rate * selectedPackage.price.amount) / 100).toFixed(2)
      : 0;
  const grossAmount = selectedPackage && +(selectedPackage?.price.amount + vatAmount).toFixed(2);

  const handleSubmit = async (data: UserData) => {
    const { packageId, firstName, lastName, email } = data;
    await completePurchase({
      packageId,
      buyer: {
        firstName,
        lastName,
        email,
      },
      vat: userVatRate ? userVatRate : { countryCode: userCountry || '', rate: 0 },
      price: {
        currency: selectedPackage?.price.currency,
        amount: selectedPackage?.price.amount,
        grossAmount,
        vatAmount,
      },
    });
    onSuccess();
  };

  if (showLoadingIndicator) return <CircularProgress sx={{ color: colors.brandYellow }} />;

  return (
    <FormLayout
      title={translationsEn.reviewYourOrderTitle}
      buttonTitle={translationsEn.buttonCompletePurchase}
      onSubmit={() => handleSubmit(userData)}
    >
      <CheckoutRow
        name={translationsEn.package}
        value={`${grossAmount} ${pickCurrencySymbol(selectedPackage?.price.currency)}`}
      />
      <CheckoutRow
        name={translationsEn.buyer}
        value={`${userData.firstName} ${userData.lastName}`}
      />
      <CheckoutRow
        name={translationsEn.price}
        value={`${selectedPackage?.price.amount} ${pickCurrencySymbol(selectedPackage?.price.currency)}`}
      />
      <CheckoutRow
        name={`${translationsEn.vat} (${userVatRate ? userVatRate.rate : 0}%)`}
        value={`${vatAmount} ${pickCurrencySymbol(selectedPackage?.price.currency)}`}
      />
      <Box height={'1px'} width="100%" sx={{ backgroundColor: colors.gray }} />
      <Box flexDirection="row" display="flex" alignItems="center" justifyContent="space-between">
        <Typography fontSize={20} fontWeight={600}>
          {translationsEn.total}
        </Typography>
        <Typography fontSize={20} fontWeight={600}>
          {`${grossAmount} ${pickCurrencySymbol(selectedPackage?.price.currency)}`}
        </Typography>
      </Box>
    </FormLayout>
  );
};
