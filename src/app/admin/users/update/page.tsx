'use client';
import PageTitle from '@components/UI/PageTitle';
import useUpdate from '../_hooks/useUpdate';
import { UpdateInputTypes } from '../types';
import AppInput from '@components/Form/Input';
import AppPrimaryButton from '@components/Form/Button/Primary';

function Page() {
  const {
    updateLoading,
    updateUserHandler: updatePostHandler,
    formHooks,
  } = useUpdate();
  const { control, handleSubmit } = formHooks;

  function submitHandler(data: UpdateInputTypes) {
    console.log({ data });
    updatePostHandler(data);
  }

  return (
    <>
      <PageTitle title="Update User" />
      <section className="grid grid-cols-3">
        <form className="space-y-4" onSubmit={handleSubmit(submitHandler)}>
          <AppInput required label="Name" name="fullName" control={control} />
          <AppInput label="Name" name="fullName" control={control} />
          <AppInput label="Name" name="fullName" control={control} />
          <AppPrimaryButton loading={updateLoading} />
        </form>
      </section>
    </>
  );
}

export default Page;
