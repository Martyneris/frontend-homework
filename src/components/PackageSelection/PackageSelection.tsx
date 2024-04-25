import React, { Children, FC } from 'react';
import { CircularProgress, Stack } from '@mui/material';
import { FormLayout } from '../FormLayout/FormLayout';
import { translationsEn } from '@/src/translations/en';
import { PackageID } from '@/src/types/Packages';
import { OptionRow } from './components/OptionRow/OptionRow';
import { usePackages } from '@/src/hooks/usePackages';
import { colors } from '@/src/styles/styles';

interface PackageSelectionProps {
  selectedPackage: PackageID;
  onPackageSelect: (value: PackageID) => void;
  onSubmit: () => void;
}
export const PackageSelection: FC<PackageSelectionProps> = ({
  selectedPackage,
  onPackageSelect,
  onSubmit,
}) => {
  const { data: packages, isLoading } = usePackages();

  if (isLoading) return <CircularProgress sx={{ color: colors.brandYellow }} />;

  return (
    <FormLayout
      title={translationsEn.selectPackageTitle}
      buttonTitle={translationsEn.buttonNext}
      onSubmit={onSubmit}
    >
      {Children.toArray(
        packages?.map((item, index) => {
          return (
            <OptionRow
              title={`${item.id} (${item.reportCount} ${item.reportCount > 1 ? translationsEn.reports : translationsEn.report})`}
              price={item.price}
              oldPrice={index === 1 ? { amount: 29.98, currency: 'EUR' } : undefined}
              checked={selectedPackage === item.id}
              onSelect={() => onPackageSelect(item.id)}
              testId={item.id}
            />
          );
        }),
      )}
    </FormLayout>
  );
};
