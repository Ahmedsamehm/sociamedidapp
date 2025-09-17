import { BASE_URL } from "@/lib/config";
import { AxiosError } from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const PATCH = async (request: Request) => {
  try {
    const body = await request.json();

    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value || "";

    const res = await fetch(`${BASE_URL}/users/change-password`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        token,
      },
      body,
    });

    const data = await res.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    const axiosError = error as AxiosError;

    return NextResponse.json({ message: "Something went wrong", error: axiosError.response?.data }, { status: error.response?.status || 500 });
  }
};
