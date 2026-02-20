import { BASE_URL } from "@/lib/config";
import axios, { AxiosError } from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async (_req: Request, { params }: { params: Promise<{ postId: string }> }) => {
  try {
    const { postId } = await params;
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value || "";

    const { data } = await axios.get(`${BASE_URL}/posts/${postId}/comments`, {
      headers: {
        token,
      },
    });
    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      return NextResponse.json({ message: "Something went wrong", error: axiosError.response?.data }, { status: axiosError.response?.status || 500 });
    }
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
