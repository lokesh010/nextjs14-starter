// @ts-nocheck
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { UpdateInputTypes } from "../types";
import { updateUserResolver as resolver } from "../schemas";

function useUpdate() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;
  const [updateLoading, setUpdateLoading] = useState();
  const formHooks = useForm<UpdateInputTypes>({
    resolver,
  });

  function formToDto(data: UpdateInputTypes) {
    return data;
  }

  function dtoToForm(data) {
    return data;
  }

  function updatePostHandler(data: UpdateInputTypes) {
    setUpdateLoading(true);
    updatePost(id, formToDto(data))
      .then((res: any) => {
        // router.push('/post');
      })
      .catch(responseErrorHandler)
      .finally(() => setUpdateLoading(false));
  }

  return {
    formHooks,
    updateLoading,
    updatePostHandler,
  };
}

export default useUpdate;
