"use client";
import { Button } from "@/app/components/shared/button";
import { Input } from "@/app/components/shared/input";
import { Label } from "@/app/components/shared/label";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import useUpdatePassword from "../_hooks/useUpdatePassword";
import { LoaderCircle } from "lucide-react";

const SettingsForm = () => {
  const { isPending, updatePassword } = useUpdatePassword();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<Record<string, string>> = (body) => {
    updatePassword(body as any);
  };
  return (
    <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
      <span className="block my-3 text-sm text-red-500">⚠️ Password must be at least 8 characters and include a special character (@, #, $, %)</span>

      <div className="grid grid-cols-2 gap-2 space-y-3">
        <div className="col-span-2 md:col-span-1 space-y-3">
          <Label htmlFor="password">old password</Label>
          <Input type="password" id="password" {...register("password", { required: true })} />
        </div>
        <div className="col-span-2 md:col-span-1 space-y-3">
          <Label htmlFor="newPassword">newPassword</Label>
          <Input type="password" id="newPassword" {...register("newPassword", { required: true })} />
        </div>
      </div>
      <Button type="submit" disabled={isPending}>
        {isPending ? <LoaderCircle className="animate-spin" /> : "Update Password"}
      </Button>
    </form>
  );
};

export default SettingsForm;
