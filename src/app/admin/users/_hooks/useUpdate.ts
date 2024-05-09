import { useParams } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { updateUserResolver as resolver } from '../schemas';
import { UpdateInputTypes } from '../types';
import { updateUserReq } from '@api/users';

function useUpdate() {
  const params = useParams();
  const { id } = params;
  const [updateLoading, setUpdateLoading] = useState(false);
  const formHooks = useForm<UpdateInputTypes>({
    resolver,
  });

  function formToDto(data: UpdateInputTypes) {
    return data;
  }

  function updateUserHandler(data: UpdateInputTypes) {
    setUpdateLoading(true);
    updateUserReq({ id, data: formToDto(data) })
      .then(() => {
        // router.push('/post');
      })
      // .catch(responseErrorHandler)
      .finally(() => setUpdateLoading(false));
  }

  return {
    formHooks,
    updateLoading,
    updateUserHandler,
  };
}

export default useUpdate;
