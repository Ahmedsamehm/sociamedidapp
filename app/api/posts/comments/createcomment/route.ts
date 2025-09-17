import { BASE_URL } from "@/lib/config";
import axios, { AxiosError } from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async (res: Response) => {
  const body = await res.json();

  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value || "";

  try {
    const res = await fetch(`${BASE_URL}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token,
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    const axiosError = error as AxiosError;
    return NextResponse.json({ message: axiosError.message, error: axiosError.message }, { status: axiosError.response?.status || 500 });
  }
};
