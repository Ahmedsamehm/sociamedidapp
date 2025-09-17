import React from "react";
import labelsForm from "@/data/labelsForm.json";
import SignupFormClient from "./_components/SignupFormClient";

const Signup = () => {
  const signupLabels = labelsForm.signup;
  const { Labels, placeholder, message, href, gender, Name, title, description, types, validationSchema } = signupLabels;

  return (
    <SignupFormClient
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
    />
  );
};

export default Signup;
