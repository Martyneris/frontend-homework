import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useUserCountry = () => {
  const query = useQuery({
    queryFn: () => axios.get<{ country: string }>('https://ipapi.co/json'),
    queryKey: ['userCountry'],
    select: (res) => res.data.country.toLowerCase(),
  });
  return query;
};
