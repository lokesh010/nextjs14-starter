// @ts-nocheck REMOVE THIS LINE IN REAL USE

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CreateInputTypes } from '../types';
import { createUserResolver as resolver } from '../schemas';
import { createUserReq } from '@api/users';

function useCreate() {
  const [loading, setLoading] = useState();
  const formHooks = useForm<CreateInputTypes>({
    resolver,
  });

  function formToDto(data: CreateInputTypes) {
    return data;
  }

  function createUserHandler(data: CreateInputTypes) {
    setLoading(true);
    createUserReq(formToDto(data))
      .then(() => {
        // router.push('/post');
      })
      // .catch(responseErrorHandler)
      .finally(() => setLoading(false));
  }

  return {
    formHooks,
    loading,
    createUserHandler,
  };
}

export default useCreate;
