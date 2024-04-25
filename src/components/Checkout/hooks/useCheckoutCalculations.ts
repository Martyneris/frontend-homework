import { Package, PackageID } from '@/src/types/Packages';
import { VatRate } from '@/src/types/VatRates';
import { useMemo } from 'react';

const useCheckoutCalculations = (
  packageId: PackageID,
  packages?: Package[],
  vatRates?: VatRate[],
  userCountry?: string,
) => {
  return useMemo(() => {
    const selectedPackage = packages?.find((item) => item.id === packageId);
    const userVatRate = vatRates?.find((rate) => rate.countryCode === userCountry);

    const vatAmount =
      userVatRate?.rate && selectedPackage
        ? +((userVatRate?.rate * selectedPackage.price.amount) / 100).toFixed(2)
        : 0;
    const grossAmount = selectedPackage
      ? +(selectedPackage.price.amount + vatAmount).toFixed(2)
      : undefined;

    return { selectedPackage, userVatRate, vatAmount, grossAmount };
  }, [packages, vatRates, userCountry, packageId]);
};

export default useCheckoutCalculations;
