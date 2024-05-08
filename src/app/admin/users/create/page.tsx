"use client";
import PageTitle from "@components/UI/PageTitle";
import useCreate from "../_hooks/useCreate";
import { CreateInputTypes } from "../types";
import AppInput from "@components/Form/Input";
import AppPrimaryButton from "@components/Form/Button/Primary";

function Page() {
  const { loading, createPostHandler, formHooks } = useCreate();
  const { control, handleSubmit } = formHooks;

  function submitHandler(data: CreateInputTypes) {
    console.log({ data });
    createPostHandler(data);
  }

  return (
    <>
      <PageTitle title="Create User" />
      <section className="grid grid-cols-3">
        <form className="space-y-4" onSubmit={handleSubmit(submitHandler)}>
          <AppInput required label="Name" name="fullName" control={control} />
          <AppInput label="Name" name="fullName" control={control} />
          <AppInput label="Name" name="fullName" control={control} />
          <AppPrimaryButton loading={loading} />
        </form>
      </section>
    </>
  );
}

export default Page;
