"use client";
import React from "react";
import { SubmitHandler } from "react-hook-form";
import useLoginForm, {
  LoginFormSchemaType,
} from "@/app/(auth)/login/useLoginForm";
import { ErrorMessage } from "@/app/Components";
import { signIn } from "@/app/auth";

const SignIn = () => {
  const { register, handleSubmit, reset, errors } = useLoginForm();

  const handleSubmitForm: SubmitHandler<LoginFormSchemaType> = async (
    values
  ) => {
    try {
      console.log(values);
      const result = await signIn("credentials", values);
      console.log(result);
      reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="space-y-6" onSubmit={handleSubmit(handleSubmitForm)}>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
        >
          Email address
        </label>
        <div className="mt-2">
          <input
            id="email"
            {...register("email")}
            type="email"
            autoComplete="email"
            className="block w-full rounded-md border-0 py-1.5 shadow-sm dark:bg-transparent dark:text-white px-2 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
        </div>
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
        >
          Password
        </label>
        <div className="mt-2">
          <input
            id="password"
            {...register("password")}
            type="password"
            autoComplete="current-password"
            className="block w-full rounded-md border-0 py-1.5 shadow-sm dark:bg-transparent dark:text-white px-2 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
          <label
            htmlFor="remember-me"
            className="ml-3 block text-sm leading-6 text-gray-700 dark:text-gray-300"
          >
            Remember me
          </label>
        </div>

        <div className="text-sm leading-6">
          <a
            href="#"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Forgot password?
          </a>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign in
        </button>
      </div>
    </form>
  );
};

export default SignIn;
