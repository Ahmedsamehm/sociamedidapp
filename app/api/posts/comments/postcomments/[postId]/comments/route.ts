import { BASE_URL } from "@/lib/config";
import axios, { AxiosError } from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async (res: Request, { params }: { params: { postId: string } }) => {
  const { postId } = await params;

  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  try {
    const { data } = await axios.get(`${BASE_URL}/posts/${postId}/comments`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token,
      },
    });
    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    const axiosError = error as AxiosError;

    return NextResponse.json({ message: "Something went wrong", error: axiosError.response?.data }, { status: axiosError.response?.status || 500 });
  }
};
