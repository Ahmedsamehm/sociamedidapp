import { BASE_URL } from "@/lib/config";
import axios, { AxiosError } from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const PUT = async (req: Request) => {
  try {
    const body = await req.json();
    const { content, commentId } = body;
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value || "";

    const response = await axios.put(
      `${BASE_URL}/comments/${commentId}`,
      { content },
      {
        headers: {
          token,
        },
      },
    );

    return NextResponse.json(response.data, { status: 200 });
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      return NextResponse.json({ message: "Something went wrong", error: axiosError.response?.data }, { status: axiosError.response?.status || 500 });
    }
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
