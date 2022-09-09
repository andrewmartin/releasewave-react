import { AXIOS } from '@/api/axios';
import { SiteOption } from '@/types/Data';

export const onUpdateOption = async (payload: Partial<SiteOption>) => {
  return await AXIOS().instance.put<SiteOption>(`options`, {
    option: payload,
  });
};
