export const pickCurrencySymbol = (currency?: string) => {
  switch (currency) {
    case 'EUR':
      return '€';
    case 'USD':
      return '$';
    default:
      return '€';
  }
};
