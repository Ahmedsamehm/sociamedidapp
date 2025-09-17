"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/app/components/shared/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/shared/card";
import { Input } from "@/app/components/shared/input";
import { Label } from "@/app/components/shared/label";
import Link from "next/link";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/shared/select";
import useSignUp from "@/app/(auth)/signup/_hooks/useSignUp";
type FormProps = {
  className?: string;
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
  handleAuth: (body: any) => void;
  isPending?: boolean;
  ErrorMessage?: string;
};
export function LoginForm({ ...props }: FormProps) {
  const { className, Labels, placeholder, message, href, gender, Name, title, description, types, validationSchema, handleAuth, ErrorMessage, isPending } = props;
  const {
    control,
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit: SubmitHandler<Record<string, string>> = (body) => {
    handleAuth(body);
  };

  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              {Labels?.map((label: string, index: number) => (
                <div className="space-y-3" key={index}>
                  <Label className="capitalize" htmlFor={label}>
                    {label}
                  </Label>
                  {label === "gender" ? (
                    <Controller
                      control={control}
                      name="gender"
                      render={({ field: { value, onChange } }) => (
                        <Select value={value} onValueChange={onChange}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Gender" />
                          </SelectTrigger>
                          <SelectContent>
                            {gender?.map((g: string, idx: number) => (
                              <SelectItem key={idx} value={g}>
                                {g}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                  ) : (
                    <>
                      <Input
                        id={label}
                        type={types?.[index] || "text"}
                        // If the field is "password", use the validation rule from the schema
                        {...register(label, label === "password" ? validationSchema?.password : {})}
                        placeholder={placeholder?.[index] || ""}
                        required
                      />
                      {errors[label] && <p className="text-red-500">{errors[label]?.message as string}</p>}
                    </>
                  )}
                </div>
              ))}

              <div className="flex flex-col gap-3">
                <Button disabled={isPending} type="submit" className="w-full">
                  {Name}
                </Button>
              </div>
            </div>
            {ErrorMessage && <p className="text-red-500 text-center my-2">{ErrorMessage}</p>}
            <div className="mt-4 text-center text-sm capitalize ">
              {message}
              <Link href={`/${href}`} className="underline underline-offset-4 mx-2">
                {href}
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
