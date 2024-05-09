import { CreateInputTypes } from '@/admin/users/types';
import fetchClient from '@/shared/lib/FetchInstance';

export const createUserReq = (data: CreateInputTypes) =>
  fetchClient('/user/create', { method: 'POST', body: JSON.stringify(data) });

export const updateUserReq = ({
  id,
  ...data
}: {
  id: string | string[];
  data: CreateInputTypes;
}) =>
  fetchClient('/user/update' + id, {
    method: 'POST',
    body: JSON.stringify(data),
  });
