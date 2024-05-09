'use client';
import PrimaryButton from '@components/Form/Button/Primary';
import AppInput from '@components/Form/Input';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { loginResolver as resolver } from './schemas';
import { ILogin } from './types';
import { loginReq } from '@api/auth';

function Form() {
  const { control, handleSubmit } = useForm<ILogin>({ resolver });

  function submitHandler(data: ILogin) {
    loginReq(data).catch((err) => console.log({ err }));
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit(submitHandler)}>
      <div className="mb-5 flex justify-center text-center">
        <Image width={60} height={60} src="/assets/logo.png" alt="logo" />
      </div>
      <h5 className="text-xl font-medium">LOGIN</h5>
      <AppInput control={control} label="Username" name="username" />
      <AppInput control={control} label="Password" name="password" />
      <div className="flex items-start">
        <a
          href="#"
          className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
        >
          Forgot Password?
        </a>
      </div>
      <div className="flex justify-center">
        <PrimaryButton
          size="large"
          className="btn btn-primary"
          htmlType="submit"
        >
          Login
        </PrimaryButton>
      </div>
    </form>
  );
}

export default Form;
