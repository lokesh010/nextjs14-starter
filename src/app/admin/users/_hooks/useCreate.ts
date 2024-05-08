// @ts-nocheck REMOVE THIS LINE IN REAL USE

import { useState } from "react";
import { useForm } from "react-hook-form";
import { CreateInputTypes } from "../types";
import { createUserResolver as resolver } from "../schemas";

function useCreate() {
  const [loading, setLoading] = useState();
  const formHooks = useForm<CreateInputTypes>({
    resolver,
  });

  function formToDto(data: CreateInputTypes) {
    return data;
  }

  function createPostHandler(data: CreateInputTypes) {
    setLoading(true);
    createPost(formToDto(data))
      .then((res: any) => {
        // router.push('/post');
      })
      .catch(responseErrorHandler)
      .finally(() => setLoading(false));
  }

  return {
    formHooks,
    loading,
    createPostHandler,
  };
}

export default useCreate;
