import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { VatRate } from '../types/VatRates';

export const useVatRates = () => {
  const query = useQuery({
    queryFn: () => axios.get<VatRate[]>('/api/vat-rates'),
    queryKey: ['vatRates'],
    select: (res) => res.data,
  });
  return query;
};
