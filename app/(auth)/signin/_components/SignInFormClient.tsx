"use client";

import { LoginForm } from "@/app/components/shared/login-form";
import React from "react";

import useSignIn from "../_hooks/useSignIn";

type FormProps = {
  Labels?: string[];
  placeholder?: string[];
  message?: string;
  href?: string;
  gender?: string[];
  Name: string;
  title?: string;
  description?: string;
  types?: string[] | undefined;
  validationSchema?: any;
};
const SignInFormClient = ({ ...props }: FormProps) => {
  const { Labels, placeholder, message, href, gender, Name, title, description, types, validationSchema } = props;
  const { signIn, isPending, isError, error } = useSignIn();

  const ErrorMessage = error?.response?.data?.details;

  return (
    <LoginForm
      Labels={Labels}
      placeholder={placeholder}
      message={message}
      href={href}
      gender={gender}
      Name={Name}
      title={title}
      description={description}
      types={types}
      validationSchema={validationSchema}
      handleAuth={signIn}
      isPending={isPending}
      ErrorMessage={ErrorMessage}
    />
  );
};

export default SignInFormClient;
