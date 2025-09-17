import { BASE_URL } from "@/lib/config";
import { AxiosError } from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async () => {
  const cookieStore = await cookies();
  try {
    const token = cookieStore.get("token")?.value || "";
    const res = await fetch(`${BASE_URL}/users/profile-data`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token,
      },
    });
    const data = await res.json();
    const response = NextResponse.json(data, { status: 200 });
    response.cookies.set({
      name: "userId",
      value: data.user._id,
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60,
      sameSite: "strict",
      // secure: process.env.NODE_ENV === "production",
    });
    return response;
  } catch (error) {
    const axiosError = error as AxiosError;
    return NextResponse.json(
      {
        details: axiosError.response?.data || "something went wrong",
      },
      { status: axiosError?.response?.status || 500 }
    );
  }
};
