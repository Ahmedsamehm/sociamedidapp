import { AxiosError } from "axios";
import { BASE_URL } from "@/lib/config";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const PUT = async (res: Response) => {
  const body = await res.json();
  const content = body.content;
  const commentId = body.commentId;
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value || "";

  try {
    const res = await fetch(`${BASE_URL}/comments/${commentId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        token,
      },
      body: JSON.stringify({ content }),
    });
    const data = await res.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    const axiosError = error as AxiosError;
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
};
