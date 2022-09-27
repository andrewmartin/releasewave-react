import { AXIOS } from '@/api/axios';
import { SiteOption } from '@/types/Data';

export const onUpdateOption = async (payload: Partial<SiteOption>) => {
  const data = JSON.stringify(payload);

  return await AXIOS().instance.put<SiteOption>(`options`, {
    option: {
      data,
    },
  });
};
