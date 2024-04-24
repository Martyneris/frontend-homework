import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Package } from '../types/Packages';

export const usePackages = () => {
  const query = useQuery({
    queryFn: () => axios.get<Package[]>('/api/packages'),
    queryKey: ['packages'],
    select: (res) => res.data,
  });
  return query;
};
