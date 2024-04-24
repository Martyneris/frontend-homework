import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { VatRate } from '../types/VatRates';

interface PurchasePayload {
  packageId: string;
  buyer: {
    firstName: string;
    lastName: string;
    email: string;
  };
  vat: VatRate;
  price: {
    currency?: string;
    amount?: number;
    grossAmount?: number;
    vatAmount?: number;
  };
}

export const useCompletePurchase = () => {
  const mutation = useMutation({
    mutationFn: (data: PurchasePayload) => axios.post('/api/orders', data),
  });
  return mutation;
};
