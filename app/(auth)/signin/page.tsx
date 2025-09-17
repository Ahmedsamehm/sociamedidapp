import React from "react";
import labelsForm from "@/data/labelsForm.json";
import SignInFormClient from "./_components/SignInFormClient";
const Signin = () => {
  const signupLabels = labelsForm.signin;
  const { Labels, placeholder, message, href, Name, title, description, validationSchema, types } = signupLabels;
  return (
    <SignInFormClient Labels={Labels} placeholder={placeholder} message={message} href={href} Name={Name} title={title} description={description} validationSchema={validationSchema} types={types} />
  );
};

export default Signin;
