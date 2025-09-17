"use client";

import { LoginForm } from "@/app/components/shared/login-form";
import React from "react";
import useSignUp from "../_hooks/useSignUp";

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
const SignupFormClient = ({ ...props }: FormProps) => {
  const { Labels, placeholder, message, href, gender, Name, title, description, types, validationSchema } = props;
  const { signup, isPending, isError, error } = useSignUp();

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
      handleAuth={signup}
      isPending={isPending}
      ErrorMessage={ErrorMessage}
    />
  );
};

export default SignupFormClient;
