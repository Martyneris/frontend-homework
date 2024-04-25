import { Box, Checkbox, Typography } from '@mui/material';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import React, { FC } from 'react';
import { colors } from '@/src/styles/styles';
import { PackagePrice } from '@/src/types/Packages';
import { pickCurrencySymbol } from '@/src/utils/currencies';

interface OptionRowProps {
  title: string;
  price: PackagePrice;
  checked: boolean;
  onSelect: () => void;
  testId: string;
  oldPrice?: PackagePrice;
}

export const OptionRow: FC<OptionRowProps> = ({
  title,
  price,
  checked,
  onSelect,
  testId,
  oldPrice,
}) => {
  return (
    <Box
      component="div"
      onClick={onSelect}
      alignItems="center"
      display="flex"
      flexDirection="row"
      width="100%"
      justifyContent="space-between"
      sx={{ cursor: 'pointer' }}
      data-testid={testId}
    >
      <Box flexDirection="row" display="inline-block">
        <Checkbox
          checked={checked}
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<RadioButtonCheckedIcon style={{ color: colors.black }} />}
        />
        <Typography
          fontSize={14}
          fontWeight={400}
          display="inline-block"
          textTransform="capitalize"
        >
          {title}
        </Typography>
      </Box>
      <Box flexDirection="row" display="flex" gap={1} alignItems="center">
        {oldPrice ? (
          <Typography
            fontSize={14}
            fontWeight={600}
            sx={{ textDecoration: 'line-through', color: colors.gray }}
          >
            {`${oldPrice.amount}${pickCurrencySymbol(oldPrice.currency)}`}
          </Typography>
        ) : null}
        <Typography fontSize={18} fontWeight={600}>
          {`${price.amount}${pickCurrencySymbol(price.currency)}`}
        </Typography>
      </Box>
    </Box>
  );
};
