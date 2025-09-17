"use client";
import AvatarComponent from "@/app/components/AvatarComponent";
import { Button } from "@/app/components/shared/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/app/components/shared/card";
import { Input } from "@/app/components/shared/input";
import { Label } from "@/app/components/shared/label";
import { Textarea } from "@/app/components/shared/textarea";
import { ImageUp } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { useCreatePost } from "../_hooks/useCreatePost";
import { createPostBody } from "../_services/createPostservice";

type FormValues = {
  body: string;
  image: FileList;
};

const CreatePost = () => {
  const { createPost, isPending } = useCreatePost();
  const { register, handleSubmit, watch, resetField } = useForm<FormValues>();

  const selectedImage = watch("image")?.[0];

  const onSubmit = (data: FormValues) => {
    const body = data.body;
    const image = data.image[0];
    if (!body) return;
    if (!image) {
      createPost({ body } as createPostBody);
    } else {
      createPost({ body, image } as createPostBody);
    }

    resetField("body");
    resetField("image");
  };

  const handleRemoveImage = () => {
    resetField("image");
  };

  return (
    <div className="my-2">
      <Card className="border-2 border-gray-300 dark:border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Create Posts</CardTitle>
        </CardHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent>
            <div className="flex items-center justify-between">
              <AvatarComponent src={"/image.png"} alt={"Post image"} fallBack="A" />
              <Textarea {...register("body", { required: true })} rows={1} placeholder="What's on your mind?" className="mx-2" />
            </div>
          </CardContent>

          <CardFooter className="ml-7 flex justify-between mt-3">
            <div className="flex items-center gap-2">
              <Input id="image" type="file" accept="image/*" className="hidden" {...register("image")} />

              <Label htmlFor="image" className="flex items-center gap-1 cursor-pointer">
                <ImageUp className="size-6" />
                Add Photo
              </Label>

              {selectedImage && (
                <Button size="sm" variant="destructive" type="button" onClick={handleRemoveImage}>
                  Remove
                </Button>
              )}
            </div>

            <Button disabled={isPending} size="sm" type="submit" className="ml-2">
              Post
            </Button>
          </CardFooter>

          {selectedImage && (
            <div className="mx-5 mt-3">
              <Image src={URL.createObjectURL(selectedImage)} width={500} height={500} alt="Preview" className="size-40 object-cover rounded-md" />
            </div>
          )}
        </form>
      </Card>
    </div>
  );
};

export default CreatePost;
