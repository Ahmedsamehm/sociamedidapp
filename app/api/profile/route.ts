import { BASE_URL } from "@/lib/config";
import axios, { AxiosError } from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async () => {
  const cookieStore = await cookies();
  try {
    const token = cookieStore.get("token")?.value || "";
    const response = await axios.get(`${BASE_URL}/users/profile-data`, {
      headers: {
        token,
      },
    });

    const data = response.data;
    const nextResponse = NextResponse.json(data, { status: 200 });
    nextResponse.cookies.set({
      name: "userId",
      value: data.user._id,
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60,
      sameSite: "strict",
    });
    return nextResponse;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      return NextResponse.json(
        {
          details: axiosError.response?.data || "something went wrong",
        },
        { status: axiosError?.response?.status || 500 },
      );
    }
    return NextResponse.json({ details: error.message || "something went wrong" }, { status: 500 });
  }
};
