import { BASE_URL } from "@/lib/config";
import { AxiosError } from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value || "";

  try {
    const formData = await req.formData();

    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        token,
      },
      body: formData,
    });

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    const axiosError = error as AxiosError;
    return NextResponse.json({ message: axiosError.message, error: axiosError.message }, { status: axiosError.response?.status || 500 });
  }
};
